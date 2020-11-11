import './App.css';
import Home from './Home';
import Dashboard from './DashBoard'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/dashboard' component={Dashboard} />
            </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
