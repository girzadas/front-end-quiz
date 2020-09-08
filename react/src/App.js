import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Browse from './components/Browse';
import Item from './components/Item';

function App() {
    return (
      <Router>
        <Switch>
          <Route path="/browse">
            <Browse />
          </Route>
          <Route path="/item/:id">
            <Item />
          </Route>
          <Route path="/">
            <Browse />
          </Route>
        </Switch>
    </Router>
    );
  }
  
  export default App;
