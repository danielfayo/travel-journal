import React from "react";
import Location from "../Images/world.svg";

export default function Card(props){
    return(
        <div className="card">
            <img src={props.imageUrl} alt="" className="card-image"/>
            <div className="card-details">
                <div className="card-location">
                    <img src={Location} alt="location" className="location-icon"/>
                    <span className="location">{props.location}</span>
                    <a href={props.googleMapsUrl} className="location-link">View on Google Maps</a>
                </div>
                <h1 className="title">{props.title}</h1>
                <h4 className="date"><span className="start-date">{props.startDate}</span> - <span className="end-date">{props.endDate}</span></h4>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}