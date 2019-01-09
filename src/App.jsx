import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Productlist from './components/Productlist';
import Details from './components/Details';
import Cart from './components/cart/Cart';
import Default from './components/Default';
import {Switch, Route} from 'react-router-dom'
import Modal from './components/Modal'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path ="/" component={Productlist}/>
          <Route exact path ="/details/:id" component={Details}/>
          <Route exact path ="/cart" component={Cart}/>
          <Route component={Default}/>
        </Switch>
        <Modal/>
      </React.Fragment>

    );
  }
}

export default App;
