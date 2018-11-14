import React, { Component, Fragment } from "react";
import Input from "../Components/Input/Input";
import Label from "../Components/Label/Label";
import axios from "axios";
import Button from "../Components/Button/Button";
class Form extends Component {
  state = {
    city: ""
  };
  changeInputHandler = e => {
    const city = e.target.value;
    this.setState({
      city: city,
      error: "",
      display: false
    });
  };

  submitFormHandler = e => {
    e.preventDefault();
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          this.state.city +
          "&units=metric&&APPID=3a2220b3569ee815fd9d9b3aefb5de8e"
      )
      .then(response => {
        this.setState({ city: "", error: "", display: true });
        this.props.onSubmit(response.data, this.state.display);
      })
      .catch(err => {
        if (this.state.city.length === 0) {
          this.setState({
            city: "",
            error: "Error: Please provide location name",
            display: false
          });
        } else {
          this.setState({
            city: "",
            error: "Error: City not found",
            display: false
          });
        }
        this.props.onSubmit(null, this.state.display);
      });
  };

  render() {
    return (
      <form onSubmit={this.submitFormHandler}>
        <Label value="Enter Location " />
        <br />
        <Input
          type="text"
          onChange={this.changeInputHandler}
          value={this.state.city}
          placeholder="Location Name"
        />
        <br />
        <Button type="submit" value="Submit" />
        <br />
        <br />
        <p style={{ color: "red", marginLeft: 10 }}>{this.state.error}</p>
      </form>
    );
  }
}

export default Form;
