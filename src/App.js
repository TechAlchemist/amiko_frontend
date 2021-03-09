import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import BrowseMerchandisePage from './pages/BrowseMerchandisePage';
import SellAntiquePage from './pages/SellAntiquePage';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route exact path='/' render={props => < HomePage/>} />
      <Route exact path='/browse' render={props => < BrowseMerchandisePage/>} /> 
      {/* TODO: PROTECT SELL ROUTE WITH AUTH */}
      <Route exact path='/sell' render={props => < SellAntiquePage/>} /> 
      </Switch>
    </div>
  );
}

export default App;
