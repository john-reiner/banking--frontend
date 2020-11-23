import React, { useState } from "react";
import './App.css';
import Home from './Home';
import Dashboard from './DashBoard'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App(props) {

  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN")
  const [user, setUser] = useState({})

  const handleLogin = data => {
    setLoggedInStatus("Logged In!!")
    setUser(data.user)
  }

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
            <Switch>
              <Route 
              exact 
              path='/' 
              render={props => (
                <Home {...props} handleLogin={handleLogin} loggedInStatus={loggedInStatus} />
              )} 

              />
              <Route 
              exact 
              path='/dashboard' 
              render={props => (
                <Dashboard {...props} loggedInStatus={loggedInStatus}/>
              )}
                
              />
            </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
