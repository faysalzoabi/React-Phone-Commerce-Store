import React, { Component } from 'react'
import Product from './Product'
import Title from './Title';
import {addData} from '../store/actions';
import { connect } from 'react-redux';
import {addToCart, openModal,addTotal} from '../store/actions'

export class Productlist extends Component {
  
  
  componentDidMount(){
    this.props.dispatch(addData())
  }

  handleAddToCart = (id) => {
    console.log('handlecart', id);
    this.props.dispatch(addToCart(id))
    this.props.dispatch(addTotal())
  }

  handleOpenModal = (id)=> {
    console.log('handlemodal',id);
    this.props.dispatch(openModal(id))
  }

  render() {
    return (
      <div>
        <div className="container py-5">
            <Title name="Our" title="Products"/>
            <div className="row">
             { this.props.products && this.props.products.map(product => {
                console.log('product',product)
                return <Product product={product} key={product.id} handleAddToCart={this.handleAddToCart} handleOpenModal={this.handleOpenModal}/>
              })}
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    products: state.products
  }
}
export default connect(mapStateToProps)(Productlist)
