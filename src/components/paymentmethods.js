import React, { useState } from "react";
import visa  from '../assests/visa.png';
import paypal from '../assests/paypal.png';
import americanexpress from '../assests/americanexpress.png'; 
import maestro from '../assests/maestro.png';
import razorpay from '../assests/razorpay.png';
import mastercard from '../assests/mastercard.png';
import {Row,Col}  from 'react-bootstrap'

function PaymentMethods(){
    const methods = ['visa','paypal','americanexpress','mastercard','razorpay','maestro'];
    const [selected,setSelected] = useState('');
    return(
    <>
        <Row className="mb-3">
            <Col>Payment Method</Col>
        </Row>
        <div className="row row-cols-4">
            {methods.map((method)=>{
                return (
                    <div key={method} className="col payments-method" style={{borderColor:selected===method?'red':'black'}}>
                        <img className='img-shipping' 
                            src={
                                method==='visa'?visa:
                                method==='americanexpress'?americanexpress:
                                method==='maestro'?maestro:
                                method==='mastercard'?mastercard:
                                method==='razorpay'?razorpay:
                                paypal
                            } 
                            onClick={()=>setSelected(method)}
                        />
                    </div>
                )
            })}
        </div>
    </>
    )
}

export default PaymentMethods;