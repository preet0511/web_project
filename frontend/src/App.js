import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import CategoryList from './components/CategoryList';
import Cart from './components/Cart'; 

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/categories" component={CategoryList} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
};

export default App;
