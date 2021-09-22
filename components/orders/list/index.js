import React from 'react';
import OrderRow from './order-row';

export default function OrdersList({
  loading,
  orders,
  onOrderSelection,
}) {
  return (
    <div className="container">
      <div className={`b-table ${loading ? 'is-loading' : ''}`}>
        <div className="table-wrapper has-mobile-cards">
          <table className="table is-fullwidth is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Products</th>
                <th>Total(KES)</th>
                <th>Date</th>

                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {!loading &&
                orders &&
                orders.length > 0 &&
                orders.map((o) => (
                  <OrderRow
                    key={o.id}
                    {...o}
                    onSelect={() => onOrderSelection(o)}
                  />
                ))}
              {!loading && orders && orders.length == 0 && (
                <tr className="is-empty">
                  <td colSpan="7">
                    <section className="section">
                      <div className="content has-text-grey has-text-centered">
                        <p>
                          <span className="icon is-large">
                            <i className="far fa-frown fa-3x"></i>
                          </span>
                        </p>
                        <p>
                          No customers orders found at the moment.
                        </p>
                      </div>
                    </section>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

OrdersList.defaultProps = {
  onCustomerDelete: () => { },
  onCustomerSelection: () => { },
};
