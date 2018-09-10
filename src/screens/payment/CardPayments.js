import React, { Component } from 'react';
import { Container, Row} from 'reactstrap';
import HeaderBar from "../../components/HeaderBar";
import CardDetails from "../../components/CardDetails";
import PaymentDetails from "../../components/PaymentDetails";
import LoadingPage from "../../components/LoadingPage";
import {observer} from "mobx-react/index";
import store from '../../store/store';

@observer
class CardPayments extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <LoadingPage
                    isLoading={store.getIsPaymentSuccess()}
                />
                <HeaderBar
                    headerBarTitle={ "Neotic Card Payment"}
                />
                <Container>
                    <Row>
                        <CardDetails/>
                    </Row>
                    <Row>
                        <PaymentDetails/>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default CardPayments;