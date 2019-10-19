import React, { Component, Fragment } from "react";
const axios = require('axios');

class Weather extends Component {
    constructor() {
        super();
        this.state = {
          data: {
            location: '',
            summary: '',
          },
          address: '',
        }
    }
    handleChange = (e) => {
      this.setState({
        address: e.target.value,
      })
    }
    handleSubmit = (e) => {
      const { address } = this.state;
      e.preventDefault();
      axios.get(`/weather?address=${address}`).then(res => {
        console.log(res)
        this.setState({
            data: {
              location: res.data.name,
              summary: res.data.summary,
            },
        });
      })
    }
    render() {
        return (
        <Fragment>
            <form onSubmit={this.handleSubmit}>
              <label>
                Enter your address
              </label>
              <input placeholder="Address" onChange={this.handleChange} />
              <button type="submit">
                Submit
              </button>
            </form>
            <div>You must be in {this.state.data.location}. Where the {this.state.data.summary}</div>
          </Fragment>)
        ;
    }
}

export default Weather