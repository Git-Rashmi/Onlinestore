import React, { Fragment, useState } from 'react';
import { Button, Card, Form, } from 'react-bootstrap';

import { useForm } from "react-hook-form";
import { connect } from 'react-redux';

import Modal from '../../components/UI/Modal/Modal';
import Salad from '../../components/Salad/Salad';
import * as actions from '../../store/actions/index';

const Checkout = (props) => {
    // Set State
    const [modalShow, setModalShow] = useState(null);
    const [formName, setFormName] = useState(null);
    const [formEmail, setFormEmail] = useState(null);

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        setFormName(data.orderDetailsName);
        setFormEmail(data.orderDetailsEmail);
        setModalShow(true);
    }


    const hideModalHandler = () => {
        (props.onCompleteOrder());
        setModalShow(false);
        props.history.push("/store");
    }

    let orderDetails = null;
    let saladTable = <h4>First Add Ingredients</h4>;
    // const ingredients = Object.keys(props.ings).map(i => {
    //     return (
    //         {props.ings[i]}
    //     );
    //   });
    if (props.ings) {
        saladTable = <Salad
            ingredients={props.ings}
            ingredientsPrice={props.ingsPrice}
        />;

        orderDetails = (
            <Card className="mt-5">
                <Card.Header>Order details form</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="orderDetailsName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                isInvalid={!!errors.orderDetailsName}
                                name="orderDetailsName"
                                type="text"
                                placeholder="Enter Name"
                                ref={register({
                                    required: "Name field is required.",
                                    pattern: {
                                        value: /^[A-Za-z]+$/i,
                                        message: "No Spical characters allowed"
                                    }
                                })}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.orderDetailsName && errors.orderDetailsName.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="orderDetailsEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                isInvalid={!!errors.orderDetailsEmail}
                                name="orderDetailsEmail"
                                type="email"
                                placeholder="Enter email"
                                ref={register({
                                    required: "Email field is required.",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "Invalid email address."
                                    }
                                })}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.orderDetailsEmail && errors.orderDetailsEmail.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="success" size="sm" type="submit">
                            Order
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }

    const model = {
        title: <div>Thank you! Delivery is on its way </div>,
        body: (
            <Fragment>
                <h5 className="text-info">Order Details:</h5>
                <p>Name : {formName}</p>
                <p>Email : {formEmail}</p>
                {saladTable}
                <h6>Total Amount : {props.totalPrice}</h6>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <Card className="mt-5">
                <Card.Header>Current order description</Card.Header>
                <Card.Body>
                    {saladTable}
                </Card.Body>
                <Card.Footer className="text-muted">Total Price : {props.totalPrice}</Card.Footer>
            </Card>
            {orderDetails}
            {modalShow && (
                <Modal
                    modal={model}
                    show={modalShow}
                    onHide={hideModalHandler}
                />
            )}
        </Fragment>
    )
}
const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        totalPrice: state.totalPrice,
        ingsPrice: state.ingredientsPrice
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onCompleteOrder: (name) => dispatch(actions.completeOrder())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);