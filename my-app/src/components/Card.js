import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card--image">
        <img src={props.imageUrl}></img>
      </div>
      <div className="card--data">
        <img src={require("../location_icon.png")} />
        <p className="card--location">{props.location}</p>
        <a className="" href={props.googleMapsUrl}>
          View on Google Maps
        </a>
        <h1>{props.title}</h1>
        <p className="card--date">
          {props.startDate} - {props.endDate}
        </p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
