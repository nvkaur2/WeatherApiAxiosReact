import React, { Component, Fragment } from "react";
import Form from "./Form";
import Card from "../Components/WeatherCard/Card";

class App extends Component {
  state = {
    card: {},
    display: false,
    bgColor: ""
  };
  addWeatherHandler = (weatherData, display) => {
    var bgColor = this.setbackground();
    this.setState({
      card: { ...weatherData },
      display: display,
      bgColor: bgColor
    });
  };

  setbackground = () => {
    var index = Math.round(Math.random() * 9);

    var ColorValue = "FFFFFF"; // default color - white (index = 0)

    if (index === 1) ColorValue = "#FF7F50";
    if (index === 2) ColorValue = "#483D8B";
    if (index === 3) ColorValue = "#FFD700";
    if (index === 4) ColorValue = "#FF69B4";
    if (index === 5) ColorValue = "#CD5C5C";
    if (index === 6) ColorValue = "#90EE90";
    if (index === 7) ColorValue = "#BA55D3";
    if (index === 8) ColorValue = "#3CB371";
    if (index === 9) ColorValue = "#FFA500";

    return ColorValue;
  };

  render() {
    const style = { backgroundColor: this.state.bgColor };
    return (
      <Fragment>
        <Form onSubmit={this.addWeatherHandler} />
        <Card
          response={this.state.card}
          display={this.state.display}
          style={style}
        />
      </Fragment>
    );
  }
}

export default App;
