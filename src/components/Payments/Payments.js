import React, { Component, Fragment } from "react";
import axios from "axios";
import Payment from "./Payment";
import Spinner from "../UI/Spinner";

class Payments extends Component {
  state = {
    payments: [],
    loading: true,
    error: false,
    selected: null
  };

  componentDidMount() {
    axios
      .get("https://openpay-d1151.firebaseio.com/payments.json")
      .then(res => {
        const updatedPayments = res.data.map(payment => {
          return {
            ...payment,
            id: Math.random()
          };
        });
        this.setState({ loading: false, payments: updatedPayments });
      })
      .catch(err => {
        console.log(err);
        this.setState({ loading: false, error: true });
      });
  }

  choosePayment = id => {
    this.setState({ selected: id });
  };

  render() {
    let payments = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (this.state.loading) {
      payments = <Spinner />;
    }
    if (!this.state.error && !this.state.loading) {
      payments = this.state.payments
        .filter(payment => payment.interval === this.props.interval)
        .map(payment => (
          <Payment
            key={payment.id}
            interval={this.props.interval}
            date={payment.date}
            paymentCount={payment.paymentCount}
            selected={this.state.selected === payment.id}
            choosePayment={() => this.choosePayment(payment.id)}
          />
        ));
    }

    return <Fragment>{payments}</Fragment>;
  }
}

export default Payments;
