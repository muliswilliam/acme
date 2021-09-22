import React from 'react'

export default function OrderDetails({ order }) {
  const { customerName, dateCreated, lineItems, amount } = order || {};

  return (
    <div>
      <div className="columns">
        <div className="column">
          <h5><b>Customer Name</b>: {customerName}</h5>
        </div>
        <div className="column">
          <h5><b>Date Created</b>: {dateCreated}</h5>
        </div>
      </div>
      <hr />
      <div className="b-table is-small mt-4">
        <table className="table is-fullwidth is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price(KES)</th>
              <th>Subtotal(KES)</th>
            </tr>
          </thead>
          <tbody>
            {(lineItems || []).map(item => (
              <tr key={item.id}>
                <td>{item.productName}</td>
                <td>{item.quantity}</td>
                <td>{Intl.NumberFormat('en-US').format(item.price)}</td>
                <td>{Intl.NumberFormat('en-US').format(item.price * item.quantity)}</td>
              </tr>
            ))}
            <tr>
              <td>
                <b>Total</b>
              </td>
              <td></td>
              <td></td>
              <td><b>{Intl.NumberFormat('en-US').format(amount)}</b></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
