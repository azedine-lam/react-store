import React, { Component } from 'react';
import { ProductConsumer } from '../commons/Context';

class ProductDetails extends Component {
    render() {
       
        return (
            <ProductConsumer>
                {value => {
                    const { id,img, title, price, inCart, info } = value.detailProduct;
                    return (
                        <div className="container">
                            <div className="row">
                                <div className="product-details">{/*product-details*/}
                                    <div className="col-sm-5">
                                        <div className="view-product">
                                            <img src={`../${img}`} alt="tt" />
                                            <h3>ZOOM</h3>
                                        </div>
                                    </div>
                                    <div className="col-sm-7">
                                        <div className="product-information">
                                            <img src="dist/images/product-details/new.jpg" className="newarrival" alt =""  />
                                            <h2>{title}</h2>
                                            <span>
                                                <span>{price} {value.symbol}</span>
                                            </span>
                                            <p><b>Availability:</b> In Stock</p>
                                            <p><b>Condition:</b> New</p>
                                            <p>Some info about product</p>
                                            <p>{info}</p>
                                            <div className ="btn-toolbar">
                                                {inCart ? (
                                                    <button type="button" className="btn btn-success">In Cart</button>
                                                ) : (
                                                        <button type="button" className="btn btn-default cart"
                                                        disabled = {inCart?true :false}
                                                        >
                                                            <i className="fa fa-shopping-cart" onClick = {() => value.addToCart(id)} />
                                                            Add to cart
                                                        </button>
                                                    )}
                                               
                                                   <a href ="/" className="btn btn-default" >Back to list of product</a>
                                            </div>
                                            <a href ="#"><img src="dist/images/product-details/share.png" className="share img-responsive" alt =""  /></a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                }

                }
            </ProductConsumer>
        );
    }
}

export default ProductDetails;