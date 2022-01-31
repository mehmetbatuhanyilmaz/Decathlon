import React from 'react';
import Navbar from '../src/components/Navbar/Navbar';
import Footer from '../src/components/Footer/Footer'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Detail from './pages/Detail';
import Users from '../src/pages/Users';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/detail' component={Detail} />
        <Route path='/users' component={Users} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

