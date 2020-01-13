import React, { Component } from "react";

export default class CartItem extends Component {
    render() {
      const { id, title, img, price, total, count } = this.props.item;
      const { increment, decrement, removeItem } = this.props.value;
    return (
        <React.Fragment>
        <td className="cart_product">
        <img 
        src={img} 
        style ={{width:"10rem",height : "10rem"}}
        alt=""/>
        </td>
        <td className ="cart_price">{title}</td>
        <td className ="cart_price">{price}</td>

        <td className="cart_quantity">
                <div className="cart_quantity_button">
                    <span className="cart_quantity_up" onClick = {()=>increment(id)}> + </span>
                    <input className="cart_quantity_input" type="text" name="quantity" defaultValue={1} value = {count} autoComplete="off" size={2} />
                    <span className="cart_quantity_down"  onClick = {()=>decrement(id)}> - </span>
                </div>
        </td>
        <td className ="cart_price">{total}</td>
        <td className="cart_delete">
            <a className="cart_quantity_delete" href="" onClick = {()=>removeItem(id)}><i className="fa fa-times"></i></a>
        </td>
        </React.Fragment>

    )}
}