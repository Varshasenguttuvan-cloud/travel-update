import React from "react";
import "./ExploreNearYou.css";

export default function ExploreNearYou() {
  const handleNearbySearch = (query) => {
    const url = `https://www.google.com/maps/search/${query}/`;
    window.open(url, "_blank");
  };

  return (
    <div className="explore-container">
      <h1 className="explore-title">Explore Near You</h1>

      {/* LIVE GOOGLE MAP */}
      <div className="map-box">
        <iframe
          title="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31509339.657656386!2d68.09347117286134!3d20.593684024844975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff8b1e82137%3A0x2e0690f9b8d376ec!2sIndia!5e0!3m2!1sen!2sin!4v1694864000000!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen=""
        ></iframe>
      </div>

      {/* NEARBY SEARCH BUTTONS */}
      <div className="explore-buttons">
        <button onClick={() => handleNearbySearch("hotels near me")}>
          🏨 Nearby Hotels
        </button>

        <button onClick={() => handleNearbySearch("restaurants near me")}>
          🍽️ Nearby Restaurants
        </button>

        <button onClick={() => handleNearbySearch("atm near me")}>
          🏧 Nearby ATMs
        </button>
      </div>
    </div>
  );
}
