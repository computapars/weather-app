import React, { Component } from "react";
const axios = require('axios');

class Weather extends Component {
    constructor() {
      super();
      this.state = {
          data: '',
      }
    }
  componentDidMount(){
    axios.get('/weather?address=Philadelphia').then(res => {
      this.setState({
          data: res.data.address,
      });
      debugger;
    })
  }
  render() {
    return <div>{this.state.data}</div>;
  }
}

export default Weather