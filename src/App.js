import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';
import Home from './components/Home/Home';
import Ingredients from './containers/Ingredients/Ingredients';
import { Container} from 'react-bootstrap';
import NavBar from './components/Navigation/NavBar/NavBar';
function App() {
  return (
    <Fragment>
    <NavBar />
    <Container >
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/ingredients" component={Ingredients} />
        <Route path="/"  component={Home} />
      </Switch>
     </Container>
     </Fragment>
  );
}

export default App;
