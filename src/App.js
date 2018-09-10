import React, { Component } from 'react';
import './App.css';
import { Container, Row} from 'reactstrap';
import CardPayments from "./screens/payment/CardPayments";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

    render() {
        return (
            <div className="App">
                <CardPayments/>
            </div>
        );
    }
}

export default App;
