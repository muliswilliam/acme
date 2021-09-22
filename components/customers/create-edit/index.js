import { Formik } from 'formik';
import React from 'react';

export default function CreateEditCustomerForm({ customer, onSubmit }) {

  const countries = [
    {
      name: 'Kenya',
      value: 'kenya',
    },
    {
      name: 'Uganda',
      value: 'uganda',
    },
    {
      name: 'Tanzania',
      value: 'tanzania',
    },
  ];

  const initialValues = customer ? { ...customer } : {};

  const handleSubmit = (values) => {
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          {customer &&
            <>
              <h5 className="my-2"><b>Customer Agent</b>: {customer.agentName}</h5>
              <hr />
            </>
          }
          <div className="columns">
            <div className="column">
              <div className="field ">
                <label className="label is-small">First Name</label>
                <div className="control">
                  <input
                    required={true}
                    className="input is-small"
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                  />
                </div>
                {touched.firstName && errors.firstName && (
                  <p className="help is-danger">{errors.firstName}</p>
                )}
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label is-small">Last Name</label>
                <div className="control">
                  <input
                    required={true}
                    className="input is-small"
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                  />
                </div>
                {touched.lastName && errors.lastName && (
                  <p className="help is-danger">{errors.lastName}</p>
                )}
              </div>
            </div>
          </div>
          <div className="columns mt-3">
            <div className="column">
              <div className="field ">
                <label className="label is-small">Email</label>
                <div className="control">
                  <input
                    required={true}
                    className="input is-small"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </div>
                {touched.email && errors.email && (
                  <p className="help is-danger">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label is-small">Contact Number</label>
                <div className="control">
                  <input
                    className="input is-small"
                    type="text"
                    name="contactNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.contactNumber}
                  />
                </div>
                {touched.contactNumber && errors.contactNumber && (
                  <p className="help is-danger">{errors.contactNumber}</p>
                )}
              </div>
            </div>
          </div>

          <div className="columns mt-3">
            <div className="column">
              <div className="field">
                <label className="label is-small">Address</label>
                <div className="control">
                  <input
                    className="input is-small"
                    type="text"
                    name="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                  />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label is-small">City</label>
                <div className="control">
                  <input
                    className="input is-small"
                    type="text"
                    name="city"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.city}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="columns my-3">
            <div className="column">
              <div className="field ">
                <label className="label is-small">Location</label>
                <div className="select is-small is-fullwidth">
                  <select
                    name="country"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.country?.toLowerCase()}
                  >
                    <option value="">Select location</option>
                    {countries.map((c) => (
                      <option key={c.value} value={c.value.toLowerCase()}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="column"></div>
          </div>
        </form>
      )}
    </Formik>
  );
}

CreateEditCustomerForm.defaultProps = {
  onSubmit: () => { }
};