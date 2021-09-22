import React from 'react';
import CustomerRow from './customer-row';

export default function CustomerList({
  loading,
  customers,
  onCustomerSelection,
  onCustomerDelete,
}) {
  return (
    <div className="container">
      <div className={`b-table ${loading ? 'is-loading' : ''}`}>
        <div className="table-wrapper has-mobile-cards">
          <table className="table is-fullwidth is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>Name</th>
                <th>Agent Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Contact Number</th>
                <th>Location</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {!loading &&
                customers &&
                customers.length > 0 &&
                customers.map((c) => (
                  <CustomerRow
                    key={c.id}
                    {...c}
                    onSelect={() => onCustomerSelection(c)}
                    onDelete={() => onCustomerDelete(c)}
                  />
                ))}
              {!loading && customers && customers.length == 0 && (
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
                          No customers found, click on {'Create Customer'} to
                          add new customer.
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

CustomerList.defaultProps = {
  onCustomerDelete: () => { },
  onCustomerSelection: () => { },
};
