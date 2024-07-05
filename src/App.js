import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import AirportList from './components/AirportList'
import AirportDetails from './components/AirportDetails'
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Switch>
            <Route path="/" exact component={AirportList} />
            <Route path="/airport/:id" component={AirportDetails} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
