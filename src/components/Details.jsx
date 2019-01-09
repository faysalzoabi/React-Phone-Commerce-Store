import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchDetailProduct} from '../store/actions'


export class Details extends Component {

  
  componentDidMount(){
    this.props.dispatch(fetchDetailProduct(this.props.match.params.id))
  }
  
  render() {
    const{id,company,img,info,price,title,inCart} = this.props.product
    console.log('img',img);
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-10 mx-auto text-center text-blue my-5">
            <h1>{title}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <img src={img} className="image-fluid" alt="product"/>
          </div>

          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
              <h2>Model: {title}</h2>
              <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
              made by : <span className="text-uppercase">{company}</span>
              </h4>
              <h4 className="text-blue">
                <strong>
                  price: <span>$</span>
                  {price}
                </strong>
              </h4>
              <p className="text-capitalize font-weight-bold mt-3 mb-0">
                some info about product:
              </p>
              <p className="text-muted lead">
                {info}
              </p>
              <div>
                <Link to="/">
                <button type="button" className="btn btn-primary btn-lg mr-2">Back To Products</button>
                </Link>

                <button disabled={inCart? true:false} type="button" className="btn btn-warning">
                  {inCart ? "inCart" : "Add to Cart"}
                </button>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    product: state.product
  }
}
export default connect(mapStateToProps)(Details)
