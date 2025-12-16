import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import visitingPlaces from "./visitingplace";
import "./StateDetails.css";

function StateDetails() {
  const { name } = useParams();          // State name
  const navigate = useNavigate();
  const places = visitingPlaces[name] || [];

  return (
    <div className="details-container">
      <h1>
        <center>Top Places to Visit in {name}</center>
      </h1>

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="places-grid">
        {places.map((place, index) => (
          <div
            className="place-card"
            key={index}
            onClick={() =>
  navigate(`/state/${name}/place/${encodeURIComponent(place.name)}`)
}

            style={{ cursor: "pointer" }}
          >
            <img src={place.img} alt={place.name} />
            <h2>{place.name}</h2>
            <p>{place.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StateDetails;
