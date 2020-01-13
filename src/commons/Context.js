import React, { Component } from 'react';
import { storeProducts } from '../data';
import { getCart,updateCart} from './Cookies'


const ProductContext = React.createContext();
//Provider
//Consumer
class ProductProvider extends Component {


    state ={
        products : [],
        detailProduct : {},
        cart :[],
        currency :{symbol:"$",local:"USD"},
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
       }


    componentDidMount (){
        this.setProducts();
        const cart = getCart()
        this.setState({cart:JSON.parse(cart)})
        this.isInCart();
    }
    
   
    setProducts = () => {
        let products = [];
        storeProducts.forEach(p => {
           const singlItem = {...p}
            products = [...products,singlItem]
        })
        this.setState(() => {
            return { products };
          }, this.checkCartItems);
        };

    setDetailProduct = () =>{
        const product = JSON.parse(localStorage.getItem("detail"));
        this.setState({detailProduct:product})
    }

    getItem = id => {
        return this.state.products.find(item => item.id === id);
    };

    isInCart = () => {
        const cart = JSON.parse(getCart());
        let products = []
        storeProducts.forEach(function (item) { 
            const singleItem = { ...item };
            cart.forEach(function (c) { 
                if (item.id === c.id) { 
                    singleItem.inCart = true
                }
            });
            products = [...products, singleItem];
        });
        this.setState(() => {
            return { products }
        })

    }
    handleDetaile = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
          return { detailProduct: product };
        });
        localStorage.setItem('detail',JSON.stringify(product))
      };


    addToCart = (id) => {
       let tempProducts = [...this.state.products]
       const index = tempProducts.indexOf(this.getItem(id))
       const product = tempProducts[index]
       product.inCart = true;
       const price = product.price;
       product.count=1;
       product.total = price;
       this.setState(() => {
           return {
               products: [...tempProducts],
               cart: [...this.state.cart, product],
               detailProduct: { ...product }
            };
        },
        //callback
        this.addTocartCallBack
          /*  () => {
                (()=>{ this.addTotals()})
                (()=>{Cookies.set('cart', this.state.cart)})
            }*/
        );
    };

    addTocartCallBack = () => {
        this.addTotals();
        updateCart(this.state.cart)
    }
    increment = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => {
          return item.id === id;
        });
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState(() => {
          return {
            cart: [...tempCart]
          };
        }, this.addTotals);
        updateCart(tempCart)
      };
      decrement = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => {
          return item.id === id;
        });
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        if (product.count === 0) {
          this.removeItem(id);
        } else {
          product.total = product.count * product.price;
          this.setState(() => {
            return { cart: [...tempCart] };
          }, this.addTotals);
        }
      };
      getTotals = () => {
        // const subTotal = this.state.cart
        //   .map(item => item.total)
        //   .reduce((acc, curr) => {
        //     acc = acc + curr;
        //     return acc;
        //   }, 0);
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        return {
          subTotal,
          tax,
          total
        };
      };

    addTotals = () => {
        const totals = this.getTotals();
        this.setState(
          () => {
            return {
              cartSubTotal: totals.subTotal,
              cartTax: totals.tax,
              cartTotal: totals.total
            };
          },
          () => {
          }
        );
      };

      removeItem = id => {
        let tempProducts = [...this.state.products];
        let tempCart = JSON.parse(getCart())
        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
        
        tempCart = tempCart.filter(item => {
            return item.id !== id;
        });
        
        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            };
        },  this.addTotals);
        updateCart(tempCart)
      };

      clearCart = () => {
        this.setState(
          () => {
            return { cart: [] };
          },
          () => {
            this.setProducts();
            this.addTotals();
          }
        );
       updateCart([])
      };



    usdToCad = (val) => {
        let products = [];
        let currency ={};
        let taux =1;
        if(val ==="CAD"){
            taux = 1.01 ;
           currency.local = "CANADA"
           currency.symbol = "$C"
        }else if (val ==="EUR") {
            taux = 1.41;
            currency.local = "EUROPE"
            currency.symbol = "€"
        }
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            singleItem.price = singleItem.price * taux;
            products = [...products, singleItem];
          });
          this.setState(() => {
            return { products,currency }
        })
    };

    render() {
        return (
            <ProductContext.Provider value = { {
                ...this.state,
                handleDetail :this.handleDetaile,
                addToCart : this.addToCart,
                usdToCad : this.usdToCad,
                isInCart : this.isInCart,
                increment : this.increment,
                decrement : this.decrement,
                removeItem : this.removeItem,
                clearCart : this.clearCart
            }}>
                {this.props.children}
           
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider,ProductConsumer }
