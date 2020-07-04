import React from 'react';
import {Button} from 'react-bootstrap';

const goToIngredientsPage = (props) => {
    props.history.push("/ingredients")
}

const Home = (props) => {
    return (
            <div className="text-center m-5">
                <h1>Greetings!!</h1>
                <h2>Welcome To Salad store</h2>
                <Button
                    onClick={() => goToIngredientsPage(props)}
                    className="m-5"
                    variant="primary">Order Salad</Button>
            </div>
    )
}

export default Home;