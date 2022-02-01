import React from 'react';
import Navbar from '../src/components/Navbar/Navbar';
import Footer from '../src/components/Footer/Footer'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostList from '../src/pages/PostList/PostList';
import UserDetail from '../src/pages/UserDetail/UserDetail';
import UserList from '../src/pages/UserList/UsersList';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={PostList} />
        <Route path='/detail' component={UserDetail} />
        <Route path='/users' component={UserList} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

