import React, { Component } from "react";
const axios = require('axios');

class Home extends Component {
  constructor() {
    super();
      this.state = {
          title: '',
          body: '',
      }
    }
  componentDidMount(){
    // todo: why did get to / fail?
    axios.get('/home').then(res => {
      this.setState({
          title: res.data.title,
          body: res.data.body,
      });
    })
  }
  render() {
    return <div>{this.state.title}{this.state.body}</div>;
  }
}

export default Home;