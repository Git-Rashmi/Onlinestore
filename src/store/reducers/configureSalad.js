import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../helpers/utility';

const addIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const newPrice = state.totalPrice + state.ingredientsPrice[action.ingredientName];
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: +newPrice
    }
    return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
    const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
    const updatedIngs = updateObject(state.ingredients, updatedIng);
    const newPrice = state.totalPrice - state.ingredientsPrice[action.ingredientName];
    const updatedSt = {
        ingredients: updatedIngs,
        totalPrice: +newPrice
    }
    return updateObject(state, updatedSt);

};

const setIngredients = (state, action) => {
    const ingredients = {};
    for (let value in action.ingredients) {
        ingredients[value] = 0;
    }
    return updateObject(state, {
        ingredients: ingredients,
        ingredientsPrice: action.ingredients,
        totalPrice: 0,
    });
};

const completeOrder = (state, action) => {
    return updateObject(state, {
        ingredients: null,
        ingredientsPrice: null,
        totalPrice: 0,
    });
};

const initialState = { ingredients: null, ingredientsPrice: null, totalPrice: 0 };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
        case actionTypes.COMPLETE_INGREDIENTS: return completeOrder(state, action);
        default: return state;
    }
};


export default reducer;