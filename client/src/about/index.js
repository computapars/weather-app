import React, { Component } from "react";
const axios = require('axios');

class About extends Component {
    constructor() {
      super();
      this.state = {
          data: '',
      }
    }
  componentDidMount(){
    axios.get('/about').then(res => {
      this.setState({
          data: res.data,
      });
    })
  }
  render() {
    return <div>{this.state.data}</div>;
  }
}

export default About