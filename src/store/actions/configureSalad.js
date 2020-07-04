import * as actionTypes from './actionTypes';
import axios from 'axios';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};

export const initIngredients = () => {
    return dispatch => {
        axios.get('ingredients.json')
            .then(response => {
                dispatch(setIngredients(response.data));
            })
            .catch(error => {
                console.log("Axios Error occured while fetching the ingrediesnt", error);
            });
    };
};

export const completeOrder = () => {
    return {
        type: actionTypes.COMPLETE_INGREDIENTS,
    };
};