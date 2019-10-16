// client/src/App.js
import React, { Component } from "react";
const axios = require('axios');

class App extends Component {
  componentDidMount(){
    axios.get('/about').then(res => {
      console.log(res.data)
    })
  }
  render() {
    return <div>I'M READY TO USE THE BACK END APIS! :-)</div>;
  }
}

export default App;