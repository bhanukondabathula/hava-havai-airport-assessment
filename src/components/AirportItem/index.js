import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const AirportItem = ({airport}) => {
  return (
    <tr className="decoration">
      <td>
        <input type="checkbox" />
      </td>
      <td>
        <Link to={`/airport/${airport.id}`} className="decoration">{airport.name}</Link>
      </td>
      <td className="decoration">{airport.country}</td>
      <td>{airport.code}</td>
      <td>{airport.terminals}</td>
      <td>
        <button className="edit-button">✏</button>
        <button className="delete-button">🗑</button>
      </td>
    </tr>
  )
}

export default AirportItem
