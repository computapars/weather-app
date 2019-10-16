import React, { Component } from "react";
const axios = require('axios');

class Home extends Component {
  constructor() {
    super();
      this.state = {
          data: '',
      }
    }
  componentDidMount(){
    // todo: why did get to / fail?
    axios.get('/home').then(res => {
      this.setState({
          data: res.data,
      });
    })
  }
  render() {
    return <div>{this.state.data}</div>;
  }
}

export default Home;