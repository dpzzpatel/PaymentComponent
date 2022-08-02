import React from 'react';
import butter from '../assests/butter.png';
import indigo from '../assests/indigo.png';
import {Stack,Row,Col} from 'react-bootstrap';
import {BsTruck} from 'react-icons/bs';

function Cart(){
    return(
        <>
            <Row className="mb-3">
                <Col>Your Cart</Col>
            </Row>
            <Row className="mb-2">
                <Col>
                  <img className='img-items' src={butter} />
                </Col>
                <Col>
                  <Stack>
                    <div> Polo T-Shirt Butter </div>
                    <div className='item-id'> #24561</div>
                  </Stack>
                </Col>
                <Col className="text-end">
                  $89.90
                </Col>
            </Row>
            <Row className="mb-2">
                <Col>
                  <img className='img-items' src={indigo} />
                </Col>
                <Col>
                  <Stack>
                    <div> Summer Vibes Indigo </div>
                    <div className='item-id'> #21461</div>
                  </Stack>
                </Col>
                <Col className="text-end">
                  $69.91
                </Col>
            </Row>
            <Row className="mt-4 mb-5 justify-content-center">
                <Col xs={10}>
                  <div id='totalcost' className="p-3 rounded-pill text-center">Total Cost &emsp; $159.81</div>
                </Col>
            </Row>
            <Row>
                <Col xs={1} className='text-sm-end'>
                  <BsTruck />
                </Col>
                <Col className="mb-5">
                  You are just $30.19 away from free shipping
                </Col>
            </Row>
        </>
    )
}

export default Cart;