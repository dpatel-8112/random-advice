import axios from "axios";
import React, { Component } from "react";
var randomColor = require("randomcolor");

class RandomAdvice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      advice: "",
      color: "#fcba03",
      isbuttonDisabled: false,
      //   counter: 5,
    };
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = (event) => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        this.setState({ advice: response.data.slip.advice });
        console.log(response.data.slip.advice);
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({ color: randomColor() });

    this.setState({ isbuttonDisabled: true });

    setTimeout(() => this.setState({ isbuttonDisabled: false }), 5000);
  };

  render() {
    const { advice, color, isbuttonDisabled, pointer, counter } = this.state;

    const disable = isbuttonDisabled ? `Wait for 5 Sec` : "Give me Advice";

    return (
      <div>
        <div
          style={{
            maxWidth: "600px",

            // height: "60vh",
            // minHeight: "500px",
            margin: "20px auto",
            padding: "30px",
            borderRadius: "10px",
            backgroundColor: `${color}`,
          }}
        >
          <h1>{advice}</h1>
        </div>
        <div>
          <button
            style={{
              color: "white",
              width: "300px",
              height: "50px",
              border: `3px solid balck`,
              borderRadius: "30px",
              backgroundColor: `gray`,
              cursor: "pointer",
              fontSize: "24px",
            }}
            onClick={this.fetchAdvice}
            disabled={isbuttonDisabled}
          >
            <strong>{disable}!</strong>
          </button>
        </div>
        <div
          style={{
            position: "absolute",
            botton: "10px",
            left: "10px",
          }}
        ></div>
      </div>
    );
  }
}

export default RandomAdvice;
