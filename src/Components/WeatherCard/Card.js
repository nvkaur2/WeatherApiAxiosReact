import React from "react";
import Classes from "./Card.module.css";
import Label from "../Label/Label";
const Card = props => {
  let weather = { ...props.response.weather };
  let main = { ...props.response.main };
  let wind = { ...props.response.wind };
  let description = { ...weather[0] };
  return (
    <div
      className={Classes.Card}
      style={
        props.display
          ? { display: "block", ...props.style }
          : { display: "none" }
      }
    >
      <img src="https://picsum.photos/200/200/?random" />
      <div style={{ display: "inline-block", marginLeft: "10px" }}>
        <Label value={"Location name: " + props.response.name} />
        <br />
        <Label value={"Weather Conditions: " + description.description} />
        <br />
        <Label value={"Temperature in °C: " + main.temp} />
        <br />
        <Label value={"Pressure: " + main.pressure} />
        <br />
        <Label value={"Humidity: " + main.humidity} />
        <br />
        <Label value={"Wind: " + wind.speed} />
        <br />
      </div>
    </div>
  );
};

export default Card;
