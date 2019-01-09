import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {closeModal} from '../store/actions'

export class Modal extends Component {

  handleCloseModal = () => {
    this.props.dispatch(closeModal())
  }

  render() {
    console.log('modalprops',this.props)
    const {modalOpen} = this.props;
    console.log('modalopen',modalOpen);
    // const {img, price, title} = this.props.modalproduct;
    return (
      <div>
        {modalOpen === false ? (null) : (
          <div className="modalcontainer">
            <div className="container">
              <div className="row">
                <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                  <h5>item added to the card</h5>
                  <img src={this.props.modalproduct.img} className="img-fluid" alt="modalproduct"/>
                  <h5>{this.props.modalproduct.title}</h5>
                  <h5 className="text-muted">
                  price : $ {this.props.modalproduct.price}
                  </h5>
                  <Link to="/">
                  <button onClick={this.handleCloseModal} type="button" class="btn btn-primary">Store</button>
                  </Link>

                  <Link to="/cart">
                  <button onClick={this.handleCloseModal} type="button" class="btn btn-warning">Go to Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    modalOpen: state.openModal,
    modalproduct: state.modalProduct
  }
}

export default connect(mapStateToProps)(Modal)
