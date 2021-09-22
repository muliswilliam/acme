import React from 'react'

const productsStyles = {
  width: 400,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}

export default function CustomerRow({ customerName, lineItems, amount, dateCreated, onSelect }) {
  return (
    <tr onClick={() => onSelect()} style={{ cursor: 'pointer' }}>
      <td>{customerName}</td>
      <td style={{ ...productsStyles }}>{lineItems.map(p => p.productName).slice(0, 3).join(', ')}</td>
      <td>{Intl.NumberFormat('en-US').format(amount)}</td>
      <td>{dateCreated}</td>

      {/* Actions */}
      <td className="is-actions-cell">
        <div className="buttons is-right">
          <button
            className="button is-small is-primary"
            type="button"
            onClick={() => onSelect()}
          >
            <span className="icon">
              <i className="fa fa-eye"></i>
            </span>
          </button>
        </div>
      </td>
    </tr>
  )
}

CustomerRow.defaultProps = {
  onSelect: () => { },
}