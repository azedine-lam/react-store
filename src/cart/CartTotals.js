import React, { Component } from 'react';

class CartTotals extends Component {
    render() {
         const {
             cartSubTotal,
             cartTax,
             cartTotal,
             cart,
             clearCart
           } = this.props.value;
           const { history } = this.props;
           const emptyCart = cart.length === 0 ? true : false
           return (
               <section id="do_action">
                <div className="container">
                <div className="row">
                    <div className="col-sm-6"></div>
                    <div className="col-sm-6">
                        <div className="total_area">
                            <ul>
                                <li>Cart Sub Total <span>{cartSubTotal}</span></li>
                                <li>Tax <span>{cartTax}</span></li>
                                <li>Total <span>{cartTotal}</span></li>
                            </ul>
                            <button className="btn btn-danger update" onClick ={()=>clearCart()}>clear Cart</button>
                            <a className="btn btn-default check_out" href="">Check Out</a>
                        </div>
                    </div>
                </div>
                </div>
            </section>

        );
    }
}

export default CartTotals;