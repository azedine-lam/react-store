import React, { Component } from 'react';
import { ProductConsumer } from '../commons/Context';
import { Link } from 'react-router-dom';

class Product extends Component {



    render() {
        const {  id,img, title, price, inCart } = this.props.product;
        
        return (
            <ProductConsumer>
            {value => {
                
                  return (
                      <div className="col-sm-3">
                          <div className="product-image-wrapper">
                              <div className="single-products">
                                  <div className="productinfo text-center" onClick = {() => value.handleDetail(id)}>
                                  <Link to={`/details/${id}`}>
                                        <img src={img} alt=""  />
                                  </Link>
                                      <h2>{price} {value.currency.symbol}</h2>
                                      <p>{title}</p>
                                      {inCart?(
                                        <button className="btn btn-block in-cart">In Cart</button>
                                          ):(
                                            <button 
                                            className ="btn btn-default add-to-cart text-center"
                                            disabled = {inCart?true :false}
                                            >
                                          <i className="fa fa-shopping-cart" onClick = {() => value.addToCart(id)}>Add to cart</i>
                                          </button>
                                      )}
                                      </div>
                              </div>
                          </div>
                      </div>
                      )}}
                      </ProductConsumer>
        );
    }
}

export default Product;