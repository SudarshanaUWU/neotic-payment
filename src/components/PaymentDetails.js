import React, { Component } from 'react';
import { Col, Button, Alert, Form, FormGroup} from 'reactstrap';
import store from '../store/store';
import { observer } from 'mobx-react';

@observer
class PaymentDetails extends Component {
    render() {
        return (
            <Col sm='8' lg='8' md='8' style={{ backgroundColor: '#e9ecef', padding: '40px' }}>

                <div>
                    <h4 style={{ textAlign: 'center' }}>Order Summary</h4>
                    <hr />
                    <p style={{ textAlign: 'center', color: 'gray' }} className='mb-4'>Please check the final amount before you pay.</p>
                </div>
                <Form>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4">
                        <h4 className="mr-sm-2" style={{ textAlign: 'center' }}>{store.getTotalMockPayment()}</h4>
                    </FormGroup>

                    <Alert color={store.alertColor} isOpen={store.isErrVisible} toggle={store.onDismiss}>{store.err}</Alert>
                    <Button onClick={store.submit} style={{ backgroundColor: '#5d79c3', borderWidth: 0 , height: '60px'}} size="md" block>Pay</Button>
                </Form>

            </Col>
        );
    }
}

export default PaymentDetails;