import React, { Component } from "react";
const axios = require('axios');

class Weather extends Component {
    constructor() {
      super();
      this.state = {
          location: '',
          summary: ''
      }
    }
  componentDidMount(){
    axios.get('/weather?address=Philadelphia').then(res => {
      console.log(res)
      this.setState({
          location: res.data.name,
          summary: res.data.summary,
      });
    })
  }
  render() {
    return <div>You must be in {this.state.location}. Where the {this.state.summary}</div>;
  }
}

export default Weather