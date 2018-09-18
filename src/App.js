import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Canvas from './Canvas';
import List from './List';
import Grid from './Grid';

class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <h2>Pick Your Trail Test</h2>
               <ul>
                  <li><Link to={'/'}>Question - 1</Link></li>
                  <li><Link to={'/List'}>Question - 2</Link></li>
                  <li><Link to={'/Grid'}>Question - 3</Link></li>
               </ul>
               <hr />
               
               <Switch>
                  <Route exact path='/' component={Canvas} />
                  <Route exact path='/List' component={List} />
                  <Route exact path='/Grid' component={Grid} />
               </Switch>
            </div>
         </Router>
      );
   }
}
export default App;