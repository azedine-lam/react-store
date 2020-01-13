import React, { Component } from 'react';
import { ProductConsumer } from './Context';

class Nav extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="header-middle">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 clearfix">
                                    <div className="logo pull-left">
                                        <a href="index.html"><img src="dist/images/home/logo.png" alt="" /></a>
                                    </div>
                                    <ProductConsumer>
                                        {value => {
                                            return (
                                                <div className="btn-group pull-right clearfix">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                                                            {value.currency.local?value.currency.local:"USD"}
                                                            <span className="caret" />
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li><a href ="#"onClick={() => value.usdToCad("")}>USD</a></li>
                                                            <li><a href ="#" onClick={() => value.usdToCad("CAD")}>Canada</a></li>
                                                            <li><a href ="#" onClick={() => value.usdToCad("EUR")}>Europe</a></li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            )
                                        }}
                                    </ProductConsumer>
                                </div>
                                <div className="col-md-8 clearfix">
                                    <div className="shop-menu clearfix pull-right">
                                        <ul className="nav navbar-nav">
                                            <li><a href="/"><i className="fa fa-user" /> Account</a></li>
                                            <li><a href="/"><i className="fa fa-star" /> Product</a></li>
                                            <li><a href="checkout.html"><i className="fa fa-crosshairs" /> Checkout</a></li>
                                            <li><a href="/cart"><i className="fa fa-shopping-cart" /> Cart</a></li>
                                            <li><a href="login.html"><i className="fa fa-lock" /> Login</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="header-bottom"></div>

            </div>
        );
    }
}

export default Nav;