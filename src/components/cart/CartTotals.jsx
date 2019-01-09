import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {clearItems, addData} from '../../store/actions';

export class CartTotals extends Component {

  clearCart = () => {
      this.props.dispatch(addData())
      this.props.dispatch(clearItems())
      
  }
  render() {
      const{cartSubTotal,cartTax,cartTotal} = this.props
    return (
      <React.Fragment>
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto ml-lg-auto col-sm-8 text-capitalize text-right">
                    <Link to="/">
                        <button onClick={()=>this.clearCart()} className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button">
                            Clear All Items
                        </button>
                    </Link>
                    <h5>
                    <span className="text-title">
                        subtotal: </span>
                    <strong>$ {cartSubTotal}</strong>
                    </h5>

                    <h5>
                    <span className="text-title">
                        tax: </span>
                    <strong>$ {cartTax}</strong>
                    </h5>

                    <h5>
                    <span className="text-title">
                        total: </span>
                    <strong>$ {cartTotal}</strong>
                    </h5>
                    
                </div>
            </div>
        </div>

      </React.Fragment>
    )
  }
}


const mapStateToProps = (state) => {
    return{
        cartSubTotal: state.cartSubTotal,
        cartTax : state.cartTax,
        cartTotal : state.cartTotal
    }
  }
export default connect(mapStateToProps)(CartTotals)
