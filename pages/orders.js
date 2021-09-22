import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import DashboardLayout from '../components/layouts/dashboard';
import OrdersList from '../components/orders/list';
import OrderDetails from '../components/orders/order-details';
import Modal from '../components/shared/modal';
import { getOrders } from '../services/orders';

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    const fetchOrders = async () => {
      setLoading(true);

      try {
        const orders = await getOrders();

        if (!isCancelled) {
          setOrders(orders);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        if (!isCancelled) {
          setOrders([]);
          setLoading(false);
        }

        toast.error(error, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
      }
    };

    fetchOrders();

    // Cleanup
    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <DashboardLayout>
      <div className="is-flex is-fullwidth is-justify-content-flex-end">
        <button
          className="button is-primary is-normal is-outlined"
          onClick={() => setShowModal(true)}
        >
          <span className="icon is-medium">
            <svg viewBox="0 0 512 512" width={20} height={20}>
              <path
                d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M256 176v160M336 256H176"
              />
            </svg>
          </span>
          <span>Create Order</span>
        </button>
      </div>
      <div className="mt-5">
        <OrdersList
          loading={loading}
          orders={orders}
          onOrderSelection={(o) => {
            setSelectedOrder(o);
            setShowModal(true);
          }}
        />
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => {
          setSelectedOrder(null);
          setShowModal(false);
        }}
      >
        {{
          title: 'Order Details',
          body: <OrderDetails order={selectedOrder} />,
          footer: (
            <button
              className="button is-danger is-inverted"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          ),
        }}
      </Modal>
    </DashboardLayout>
  );
}
