import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import CreateEditCustomerForm from '../components/customers/create-edit';
import CustomerList from '../components/customers/list';
import DashboardLayout from '../components/layouts/dashboard';
import Modal from '../components/shared/modal';
import { getCustomers } from '../services/customers';

export default function Home() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleFormSubmission = (values) => {
    // Log form data,
    console.log(values);
    // Simulate creation of customer network activity
    setTimeout(() => { }, 1500);

    setSubmitting(false);
    toast.success(
      `Customer with name '${values.firstName} ${values.lastName}' created successfully.`,
      {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      }
    );
  };

  useEffect(() => {
    let isCancelled = false;
    const fetchCustomers = async () => {
      setLoading(true);

      try {
        const customers = await getCustomers();

        if (!isCancelled) {
          setCustomers(customers);
          setLoading(false);
        }
      } catch (error) {
        if (!isCancelled) {
          setLoading(false);
          setCustomers([]);
        }

        toast.error(error, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
      }
    };

    fetchCustomers();

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
          <span>Create Customer</span>
        </button>
      </div>
      <div className="mt-5">
        <CustomerList
          loading={loading}
          customers={customers}
          onCustomerSelection={(c) => {
            setSelectedCustomer(c);
            setShowModal(true);
          }}
          onCustomerDelete={(customer) => {
            const filteredCustomers = customers.filter(
              (c) => c.id != customer.id
            );
            setCustomers(filteredCustomers);
          }}
        />
      </div>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setSelectedCustomer(null);
        }}
      >
        {{
          title: 'Create/Edit Customer',
          body: (
            <CreateEditCustomerForm
              customer={selectedCustomer}
              onSubmit={(values) => handleFormSubmission(values)}
            />
          ),
          footer: (
            <>
              <button
                className="button is-danger is-inverted is-small mr-4"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className={`button is-primary is-small ${submitting ? 'is-loading' : ''
                  }`}
              >
                {selectedCustomer ? 'Save Changes' : 'Create'}
              </button>
            </>
          ),
        }}
      </Modal>
    </DashboardLayout>
  );
}
