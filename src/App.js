import React from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Home } from './views/Home';

function App() {
  return (
    <div className='container-fluid'>
      <Router>
        <>
            <Switch>
                <Route exact path='/' component={ Home } />
                <Redirect to='/' />
            </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
