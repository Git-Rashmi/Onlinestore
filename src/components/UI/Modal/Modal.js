import React from 'react';
import {
    Modal,
    Button
} from 'react-bootstrap';

const CheckoutModal = props => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.modal.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.modal.body}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CheckoutModal;