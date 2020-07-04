import React, { useEffect } from 'react';
import {Button,Spinner} from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Salad from '../../components/Salad/Salad';

const Ingredients = (props) => {

    useEffect(() => {
        !props.ings && props.onInitIngredients();
    }, [props,props.onInitIngredients, props.ings]);

    const redirectToCheckoutPageHandler = () => {
        props.history.push("/checkout");
    }

    let salad = <Spinner animation="border" />;
    if (props.ings) {
        salad = <Salad
            ingredientAdded={props.onIngredientsAdded}
            ingredientRemoved={props.onIngredientsRemoved}
            ingredients={props.ings}
            ingredientsPrice={props.ingsPrice}
            showActionColumn
        />;
    }

    let checkoutButton = null;
    if (props.totalPrice) {
        checkoutButton = <Button
            onClick={() => redirectToCheckoutPageHandler()}
            className="mt-5"
            variant="success">
              Checkout
            </Button>
    }
    return (
        <div className="text-center mt-5">
            {salad}
            <h3>Total Amount : {props.totalPrice}</h3>
            {checkoutButton}
        </div>
    )
}
const mapStateToProps = state =>{
    return{
      ings:state.ingredients,
      totalPrice:state.totalPrice,
      ingsPrice: state.ingredientsPrice
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    onIngredientsAdded : (name) => dispatch(actions.addIngredient(name)),
    onIngredientsRemoved : (name) => dispatch(actions.removeIngredient(name)),
    onInitIngredients :() => dispatch(actions.initIngredients()),
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (Ingredients);