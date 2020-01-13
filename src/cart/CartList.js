import React from 'react';
import CartItem from './CartItem';

export default function CartList({ value }) {
const {cart} = value;
    return (
        <tbody>
        {
            cart.map(item =>{
                return (
                    <tr key = {item.id}>
                    <CartItem item = {item} value = {value} />
                    </tr>
                    )
                })
            }
        </tbody>
        );
}