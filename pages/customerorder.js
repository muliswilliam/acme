import React from 'react';

import styles from '../styles/CustomerOrder.module.scss';

export default function customerorder() {
  return (
    <div className={styles.customerOrder}>
      <div className="container">
        <div className={`${styles.customerOrder__formWrapper}`}>
          <div className="columns mt-4">
            <div className="column is-8">
              <form action="" method="">
                <div className="columns">
                  <div className="column">
                    <div className="field">
                      <label className="label">First Name</label>
                      <div className="control">
                        <input className="input" type="text" name="lastName" />
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="field">
                      <label className="label">Last Name</label>
                      <div className="control">
                        <input className="input" type="text" name="lastName" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="columns">
                  <div className="column">
                    <div className="field">
                      <label className="label">Phone Number</label>
                      <div className="control">
                        <input className="input" type="text" name="phone" />
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="field">
                      <label className="label">Email Address</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="emailAddress"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="columns">
                  <div className="column">
                    <div className="field">
                      <label className="label">Company Name</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="companyName"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="field">
                      <label className="label">Country</label>
                      <div className="control">
                        <div className="select is-fullwidth">
                          <select>
                            <option value="Argentina">Argentina</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Brazil">Brazil</option>
                            <option value="Chile">Chile</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Venezuela">Venezuela</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="columns">
                  <div className="column">
                    <div className="field">
                      <label className="label">Street Address</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="streetAddress"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="field">
                      <label className="label">
                        Apartment, suite, unit etc. (optional)
                      </label>
                      <div className="control">
                        <input className="input" type="text" name="apartment" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="columns">
                  <div className="column">
                    <div className="field">
                      <label className="label">Town</label>
                      <div className="control">
                        <input className="input" type="text" name="town" />
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="field">
                      <label className="label">State/Country</label>
                      <div className="control">
                        <input className="input" type="text" name="state" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="columns">
                  <div className="column">
                    <div className="field">
                      <label className="label">Postal Code</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="postalCode"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="field">
                      <label className="label">Zip Code</label>
                      <div className="control">
                        <input className="input" type="text" name="zipCode" />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="column is-4">
              <div className={styles.customerOrder__Yorder}>
                <table>
                  <tbody>
                    <tr>
                      <th colSpan="2">Your order</th>
                    </tr>
                    <tr>
                      <td>Product Name x 2(Qty)</td>
                      <td>KES 8800</td>
                    </tr>
                    <tr>
                      <td>Subtotal</td>
                      <td>KES 17,600</td>
                    </tr>
                    <tr>
                      <td>Shipping</td>
                      <td>Free shipping</td>
                    </tr>
                  </tbody>
                </table>
                <br />

                <div className="control">
                  <label className="radio">
                    <input type="radio" name="dbt" value="dbt" checked />
                    Direct Bank Transfer
                    <p>
                      Make your payment directly into our bank account.Please use
                      your Order ID as the payment reference.Your order will not be
                      shipped until the funds have cleared in our account.
                    </p>
                  </label> <br />
                  <label className="radio mt-2">
                    <input type="radio" name="dbt" value="cd" />
                    Cash on Delivery
                  </label> <br />
                  <label className="radio mt-2">
                    <input type="radio" name="dbt" value="cd" />
                    Paypal
                  </label>
                </div>
                <button
                  className="button is-primary is-fullwidth is-rounded mb-2"
                  type="button"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
