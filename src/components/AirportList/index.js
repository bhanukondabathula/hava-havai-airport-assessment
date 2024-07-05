import React, {Component} from 'react'
import AirportItem from '../AirportItem'
import './index.css'

class AirportList extends Component {
  state = {
    airports: [
      {
        id: 1,
        name: 'Indra Gandhi International Airport',
        country: 'India',
        code: 'DEL',
        terminals: 3,
      },
      {
        id: 2,
        name: 'Dubai International Airport',
        country: 'UAE',
        code: 'DXB',
        terminals: 5,
      },
      {
        id: 3,
        name: 'Heathrow Airport',
        country: 'England',
        code: 'LHR',
        terminals: 6,
      },
      {
        id: 4,
        name: 'Istanbul Airport',
        country: 'Turkey',
        code: 'IST',
        terminals: 3,
      },
      {
        id: 5,
        name: 'Rajiv Gandhi International Airport',
        country: 'Texas',
        code: 'DFW',
        terminals: 14,
      },
    ],
  }

  render() {
    const {airports} = this.state
    return (
      <div className="airport-list">
        <div className="user-icon">👤</div>
        <div className="header-bar">
          <h2>Airports</h2>
          <div className="header-bar">
            <header className="header">
              <button className="add-new">+ Add new</button>
            </header>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>All Airports ↓</th>
              <th>Country</th>
              <th>Code</th>
              <th>Terminals</th>
              <th> </th>
            </tr>
          </thead>
          <tbody className="decoration">
            {airports.map(airport => (
              <AirportItem key={airport.id} airport={airport} />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default AirportList
