import React from 'react';
import {Button,Table,} from 'react-bootstrap';

const Salad = props => {
    let ingredientSummary = props.ingredients && Object.keys(props.ingredients)
        .map(i => {
            if(i !== 0){
            return (         
                <tr key={i}>
                    <td className="text-capitalize">{i}</td>
                    <td>{props.ingredientsPrice && props.ingredientsPrice[i]}</td>
                    <td>{props.ingredients[i]}</td>
                    {props.showActionColumn ? (
                        <td>
                            {props.ingredients[i] ?
                                <Button
                                    onClick={() => props.ingredientRemoved(i)}
                                    className="mx-1"
                                    variant="danger"
                                    size="sm"
                                >Remove</Button> : null
                            }
                            <Button
                                onClick={() => props.ingredientAdded(i)}
                                className="mx-1"
                                variant="success"
                                size="sm">Add</Button>
                        </td>
                    ) : null}
                    <td>{(props.ingredientsPrice[i] * props.ingredients[i])}</td>
                </tr>
            );
                        }
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    return (
        <Table striped bordered responsive>
            <thead>
                <tr>
                    <th>Ingredients</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    {props.showActionColumn ? <th>Add/Remove</th> : null}
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {ingredientSummary}
            </tbody>
        </Table>
    );
}

export default Salad;