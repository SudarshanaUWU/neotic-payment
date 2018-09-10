import React, { Component } from 'react';
import {Col,Form, FormGroup, Label, Input} from 'reactstrap';
import NumberFormat from 'react-number-format';
import store from '../store/store';
import { observer } from 'mobx-react';

@observer
class CardDetails extends Component {
    render() {
        return (
            <Col sm='8' lg='8' md='8' style={{ backgroundColor: '#e9ecef', padding: '40px' }} >

                <div>
                    <h3 style={{ textAlign: 'left' }}>Payments</h3>
                    <hr />
                    <p style={{ textAlign: 'left', color: 'gray' }} className='mb-4'>Please fill the following form in order to complete your purchase.</p>
                </div>
                <Form className='pl-4 pr-4'>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Name</Label>
                        <Input type="text" onChange={store.handleNameChange} />
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Shipping Address</Label>
                        <Input type="text" onChange={store.handleAddressChange} />
                    </FormGroup>


                    <Form style={{ textAlign: 'left' }} className='mt-4 mb-4'>

                        <FormGroup>
                            <FormGroup check inline style={{ float: 'right'}}>
                                {(() => {
                                    switch (store.getCardType()) {
                                        case "visa":   return <img style={{ width: '60px', height: '55px' }} src={require('../Images/visa.png')} />;
                                        case "mastercard":   return <img style={{ width: '60px', height: '55px' }} src={require('../Images/master.png')} />;
                                        case "american-express":   return <img style={{ width: '60px', height: '55px' }} src={require('../Images/amex.png')} />;
                                        default: return <img style={{ width: '60px', height: '55px' }} src={require('../Images/default.png')} />;
                                    }
                                })()}
                            </FormGroup>
                        </FormGroup>

                    </Form>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Card Number</Label>
                        <NumberFormat onChange={store.handleCardNumberChange} className='form-inline form-control' format="#### #### #### ####" />

                    </FormGroup>

                    <Form inline >
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                            <Label className="mr-sm-2">Expiry Date</Label>
                            <NumberFormat onChange={store.handleCardExpiryChange} className='form-inline form-control' format="##/##" placeholder="MM/YY" mask={['M', 'M', 'Y', 'Y']} />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                            <Label className="mr-sm-2">CVV</Label>
                            <NumberFormat onChange={store.handleCardCVCChange} className='form-inline form-control' format="####" />
                        </FormGroup>
                    </Form>


                </Form>
            </Col>
        );
    }
}

export default CardDetails;
