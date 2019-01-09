import React, { Component } from 'react'
import Title from '../Title';
import CartColumns from './CartColumns'
import EmptyCart from './Emptycart';
import { connect } from 'react-redux';
import CartList from './CartList';
import CartTotals from './CartTotals'
export class Cart extends Component {
  render() {
    return (
      <section>
        
        {this.props.cart.length > 0 ? (<React.Fragment>
                                            <Title name="your" title="cart"/>
                                            <CartColumns/>
                                            <CartList/>
                                            <CartTotals/>
                                        </React.Fragment>
                                        ) 
                                        : 
                                      (<EmptyCart/>)}
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    cart: state.cart
  }
}
export default connect(mapStateToProps)(Cart)
