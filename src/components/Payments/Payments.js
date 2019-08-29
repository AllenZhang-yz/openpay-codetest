import React, { Component } from "react";
import Payment from "./Payment/Payment";

class Plans extends Component {
  render() {
    return (
      <div>
        <Payment
          interval={this.props.interval}
          date="10th of Feburary"
          paymentCount="6"
        />
        <Payment
          interval={this.props.interval}
          date="11th of Feburary"
          paymentCount="8"
        />
        <Payment
          interval={this.props.interval}
          date="12th of Feburary"
          paymentCount="10"
        />
      </div>
    );
  }
}

export default Plans;
