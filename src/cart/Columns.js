import React, { Component } from 'react';

class Columns extends Component {
    render() {
        return (
                
                <thead>
                    <tr className="cart_menu">
                        <td className="image">Item</td>
                        <td className="description">description</td>
                        <td className="price">Price</td>
                        <td className="quantity">Quantity</td>
                        <td className="total">Total</td>
                        <td >Remove</td>
                    </tr>
                </thead>
        );
    }
}

export default Columns;