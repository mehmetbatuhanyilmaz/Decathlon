import React from 'react';
import Navbar from '../src/components/Navbar/Navbar';
import Footer from '../src/components/Footer/Footer'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostList from '../src/pages/PostList/PostList';
import UserList from './pages/UserList/UsersList';
import UserDetail from '../src/pages/UserDetail/UserDetail';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={PostList} />
        <Route path='/users' component={UserList} />
        <Route path='/detail' component={UserDetail} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

