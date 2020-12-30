import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gallery from './components/pages/Gallery'
import ScrollToTop from './components/ScrollToTop'
import Home from './components/pages/Home';

import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}  />
        {/* <Route path='/menu' component={Menu} /> */}
        {/* <Route path='/contact' component={Contact} /> */}
        <Route path='/gallery' component={Gallery} />
      </Switch>
    </Router>
  );
}

export default App;
