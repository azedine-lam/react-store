import  Cookies from 'js-cookie'

export const getCart = () => {
   return  Cookies.get('cart')
}

export const updateCart = (item) => {
    Cookies.set('cart',item)
 }
 



//export  {getCart,updateCart}