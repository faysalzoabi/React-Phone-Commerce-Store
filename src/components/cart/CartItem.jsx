import React, { Component } from 'react'
import { connect } from 'react-redux';
import {deleteItem, addTotal, incrementItem, decrementItem} from '../../store/actions'

class CartItem extends Component {


  removeItem = (id) => {
        this.props.dispatch(deleteItem(id))
        this.props.dispatch(addTotal())
    }

  handleincrement = (id) => {
      this.props.dispatch(incrementItem(id))
      this.props.dispatch(addTotal())
  }

  handleDecrement = (id) => {
    this.props.dispatch(decrementItem(id))
    this.props.dispatch(addTotal())
}
    
  render() {
    const{id, title, img, price, total, count} = this.props.item
    return (
      <div className="row my-2 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
            <img src={img} className="img-fluid" style={{width:'5rem',height:'5rem'}} alt="product"/>
        </div>

        <div className="col-10 mx-auto col-lg-2">
            <strong>prodcut : {title}</strong>
        </div>

        <div className="col-10 mx-auto col-lg-2">
            <strong>price : {price}</strong>
        </div>

         <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
            <div className="d-flex justify-content-center">
                <span className="btn btn-warning mx-1" onClick={()=>this.handleDecrement(id)}>-</span>
                <span className="btn btn-black mx-1">{count}</span>
                <span className="btn btn-warning mx-1" onClick={()=>this.handleincrement(id)}>+</span>
            </div>
        </div>

         <div className="col-10 mx-auto col-lg-2" onClick={()=>this.removeItem(id)}>
            <i className="fas fa-trash"></i>
         </div>

         <div className="col-10 mx-auto col-lg-2">
            <strong>item total : $ {total}</strong>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{
      products: state.products,
      cart: state.cart
    }
  }

export default connect(mapStateToProps)(CartItem)
