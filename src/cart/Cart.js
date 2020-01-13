import React, { Component } from 'react';
import Title from '../commons/Title';
import Columns from './Columns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../commons/Context';
import CartList from './CartList';
import CartTotals from './CartTotals';

class Cart extends Component {
    render() {
        return (
            <ProductConsumer>
            {value =>{
                const {cart} = value
                if(cart.length>0){
                    return (
                        <React.Fragment>
                        <section id="cart_items">
                            <Title name="your Cart" />
                                <div className="container">
                                <div className="table-responsive cart_info">
                                <table className="table table-condensed">
                                <Columns />
                                <CartList value = {value}/>
                                </table>
                                </div>
                                </div>
                                </section>
                                <CartTotals value ={value} history={this.props.history}/>
                                </React.Fragment>
                                )
                            }else {
                                return (<EmptyCart/>)
                            }
                        }}
                        </ProductConsumer>
                        

        );
    }
}

export default Cart;