import React ,{useState} from "react";
import dhl from '../assests/dhl.png';
import dpd from '../assests/dpd.png';
import inpost from '../assests/inpost.png';
import fedex from '../assests/fedex.png';
import {Row,Col} from 'react-bootstrap';

function DeliveryMethods(){
    const methods = ['dhl','inpost','dpd','fedex'];
    const [selected,setSelected] = useState('');
    return(
        <>
            <Row className="mt-5 mb-3">
                <Col>Delivery Method</Col>
            </Row>
            <div className="row row-cols-3 mb-3">
                {methods.map((method)=>{
                    return (
                        <div key={method} className="col payments-method" style={{borderColor:selected===method?'red':'black'}}>
                            <img className='img-shipping' 
                                src={
                                    method==='dhl'?dhl:
                                    method==='inpost'?inpost:
                                    method==='dpd'?dpd:
                                    fedex
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

export default DeliveryMethods;