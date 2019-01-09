import React, { Component } from 'react'
import {Link} from 'react-router-dom';
// import { connect } from 'react-redux';
import {addToCart} from '../store/actions'

class Product extends Component {

  // handleAddToCart = (id) => {
  //   console.log('handlecart', id);
  //   this.props.dispatch(addToCart(id))
  // }


  render() {
    const {id, title, img, price, inCart} = this.props.product;
    console.log('check',this.props.product)
    return (
      <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
          <div className="card">
            <div className="img-container p-5">
                <Link to={`/details/${id}`}>
                  <img src={img} alt="product" className="card-img-top"/>
                </Link>
                <button className="card-btn" disabled={inCart?true:false} onClick={()=>{this.props.handleAddToCart(id)
                                                                                        this.props.handleOpenModal(id)}}>
                    {console.log('incart',inCart)}
                    {inCart?
                            (<p className="text-captialize mb-0">in cart</p>)
                            :
                            (<i className="fas fa-cart-plus"/>)
                          }
                </button>
            </div>
            <div className="card-footer d-flex justify-content-between">
                 <p className="align-self-center mb-0">
                    {title}
                 </p>
                 <h5 className="text-blue font-italic mb-0">
                    <span className="mr-1">$</span>
                    {price}
                 </h5>
            </div>
          </div>
      </div>
    )
  }
}



export default Product
