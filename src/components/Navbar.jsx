import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
      <Link to="/">
          <i className="fas fa-phone-volume navbar-brand"></i>
      </Link>
      <ul className="navbar-nav align-item-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link font-weight-bolder text-white text-capitalize">
            Products
          </Link>
        </li>
      </ul>
        <Link to='/cart' className="ml-auto">
          <button type="button" className="btn btn-warning text-capitalize font-weight-bold">
            <i className="fas fa-cart-plus">
                 <span className="h5">{' '}my cart</span>
            </i>
          </button>
        </Link>
      </nav>
    )
  }
}



export default Navbar
