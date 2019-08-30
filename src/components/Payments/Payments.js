import React, { Component } from "react";
import axios from "axios";
import Payment from "./Payment";
import Spinner from "../UI/Spinner";

class Payments extends Component {
  state = {
    payments: [],
    loading: true,
    error: false
  };

  componentDidMount() {
    axios
      .get("https://openpay-d1151.firebaseio.com/payments.json")
      .then(res => {
        const fetchedData = res.data;
        this.setState({ loading: false, payments: fetchedData });
      })
      .catch(err => {
        console.log(err);
        this.setState({ loading: false, error: true });
      });
  }

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
            key={Math.random()}
            interval={this.props.interval}
            date={payment.date}
            paymentCount={payment.paymentCount}
          />
        ));
    }

    return <div>{payments}</div>;
  }
}

export default Payments;
