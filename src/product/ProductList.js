import React, { Component } from 'react';
import Title from '../commons/Title';
import { ProductConsumer } from '../commons/Context';
import Product from './Product';

class ProductList extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
            <div className="col-sm-12">
            <div className="features-items">
            <Title name="Our Producte" />
            <ProductConsumer>
            {v=>{
                return v.products.map(product =>{
                    return <Product key ={product.id} product = {product}/>
                })
            }}
            </ProductConsumer>
            </div>
            </div>
                </div>
            </div>
        );
    }
}

export default ProductList;