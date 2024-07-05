import React from 'react'
import './index.css'

const Sidebar = () => {
  
  return (
    <div className="sidebar">
      <h1>hava havai</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Dashboard</li>
          <li>Services</li>
          <ul>
            <li>
              <a href="/">Airports</a>
            </li>
            <li>Videos</li>
          </ul>
          <li>Others</li>
          <ul>
            <li>List 1</li>
            <li>List 2</li>
            <li>List 3</li>
          </ul>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
