import React from 'react'

export default function CustomerRow({ firstName, lastName, email, contactNumber, country, city, address, agentName, onSelect, onDelete }) {
  return (
    <tr onClick={() => onSelect()} style={{ cursor: 'pointer' }}>
      <td>{firstName}{' '} {lastName}</td>
      <td>{agentName}</td>
      <td>{email}</td>
      <td>{city}</td>
      <td>{contactNumber}</td>
      <td>{country}</td>
      <td>{address}</td>

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
          <button
            className="button is-small is-danger jb-modal"
            data-target="sample-modal"
            type="button"
            onClick={() => onDelete()}
          >
            <span className="icon">
              <i className="fa fa-trash-can"></i>
            </span>
          </button>
        </div>
      </td>
    </tr>
  )
}

CustomerRow.defaultProps = {
  onSelect: () => { },
  onDelete: () => { }
}