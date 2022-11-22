import React from "react";
import "@fontsource/inter";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card--image">
        <img src={props.imageUrl}></img>
      </div>
      <div className="card--data">
        <div className="card--location--details">
          <img src={require("../location_icon.png")} />
          <p className="card--location">{props.location.toUpperCase()}</p>
          <a className="" href={props.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h1>{props.title}</h1>
        <p className="card--date">
          {props.startDate} - {props.endDate}
        </p>
        <p className="card--description">{props.description}</p>
      </div>
    </div>
  );
}
