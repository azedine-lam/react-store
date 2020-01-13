import React from 'react';
import Nav from './commons/Nav';
import {  Route,Switch } from 'react-router-dom';
import ProductList from './product/ProductList';
import ProductDetails from './product/ProductDetails';
import Cart from './cart/Cart';
import Default from './product/Default';


function App() {
  return (
    <React.Fragment>
      <Nav />
      <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/details/:id" component={ProductDetails} />
            <Route path="/cart" component={Cart} />
            <Route component={Default} />
      </Switch>
    </React.Fragment>

  );
}

export default App;
