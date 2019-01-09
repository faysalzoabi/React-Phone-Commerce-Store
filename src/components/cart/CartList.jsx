import React, { Component } from 'react'
import CartItem from './CartItem';
import { connect } from 'react-redux';
export class CartList extends Component {
  render() {
    return (
      <div className="container-fluid">
        {this.props.cart.map(item => {
            return <CartItem key={item.id} item={item}/>
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{
      cart: state.cart
    }
  }
export default connect(mapStateToProps)(CartList)
