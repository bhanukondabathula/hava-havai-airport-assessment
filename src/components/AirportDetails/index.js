import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import AddTerminalModal from '../AddTerminalModal'
import './index.css'

const AirportDetails = () => {
  const {id} = useParams()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [terminals, setTerminals] = useState([
    {
      id: 1,
      name: 'Terminal 1',
      metadata: 'Optional metadata should be two lines.',
    },
    {
      id: 2,
      name: 'Terminal 2',
      metadata: 'Optional metadata should be two lines.',
    },
  ])
  const handleAddTerminal = newTerminal => {
    setTerminals(prevTerminals => [...prevTerminals, newTerminal])
  }
  const airport = {
    id: 1,
    name: 'Indra Gandhi International Airport',
    country: 'India',
    code: 'DEL',
    terminals: terminals,
  }

  return (
    <div className="airport-details">
      <h2>{airport.name}</h2>
      <div className="breadcrumbs">
        <a href="/">Airports</a> &gt; <span>{airport.name}</span>
      </div>
      <div className="tabs">
        <button>Terminals</button>
        <button>Transport</button>
        <button>Contact details</button>
      </div>
      <div className="terminals">
        {airport.terminals.map(terminal => (
          <div key={id} className="terminal">
            <img
              src="https://64.media.tumblr.com/b1ac1316c8f88d1ec9243c3a296f1387/d27455d0adec1bad-5c/s500x750/72250e4eceaf0ccc3b2230a7f432a8b2b511c5bc.jpg"
              className="terminal-img"
            />
            <div className="terminal-content">
              <div className="head-dot">
                <h3>{terminal.name}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-three-dots dot"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                </svg>
              </div>

              <p>{terminal.metadata}</p>
            </div>
          </div>
        ))}
        <button className="add-terminal" onClick={() => setIsModalOpen(true)}>
          + Add Terminal
        </button>
      </div>
      <div className="services">
        <h3>Services</h3>
        <p className="lost-found">Lost & found</p>
        <form>
          <div className="form-grouping">
            <div className="form-group">
              <label htmlFor="service">Service Name</label>
              <input type="text" value="Lost & found" readOnly id="service" />
            </div>
            <div className="form-group">
              <label htmlFor="option">Category</label>
              <select>
                <option id="option">Option 1</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="suboption">Sub Category</label>
              <select>
                <option id="suboption">Option 1</option>
              </select>
            </div>
            <div className="form-group">
              <button type="button" class="upload-image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-upload upload"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                </svg>
                Upload image
              </button>
            </div>
            <div class="show-image">
              <input type="checkbox" id="checkbox" class="checkbox" />
              <label htmlFor="checkbox">Show image</label>
            </div>

            <button type="submit" className="save-btn">
              Save
            </button>
          </div>

          <div className="form-group">
            <label htmlFor="text">Description</label>
            <textarea placeholder="type here" class="type-here" id="text">
              type here
            </textarea>
          </div>
          <p>Lounge</p>
          <hr className="hrline" />
          <p>Money Exchange</p>
          <hr className="hrline" />
        </form>
      </div>
      <AddTerminalModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onSubmit={handleAddTerminal}
      />
    </div>
  )
}

export default AirportDetails
