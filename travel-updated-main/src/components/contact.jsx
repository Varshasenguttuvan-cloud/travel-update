import React from "react";
import "./Contact.css";

export default function Contact() {
  const tripLinks = [
    // ---- Travel Essentials ----
    {
      category: "Travel Essentials",
      items: [
        { name: "Flight Booking", url: "https://www.makemytrip.com/flights" },
        { name: "Train Booking (IRCTC)", url: "https://irctc.co.in" },
        { name: "Bus Booking (RedBus)", url: "https://www.redbus.in/" },
        { name: "Car Rental (Zoomcar)", url: "https://www.zoomcar.com/" },
        { name: "Hotel Booking (Booking.com)", url: "https://www.booking.com/" },
      ],
    },

    // ---- Trip Tools ----
    {
      category: "Trip Tools",
      items: [
        { name: "Google Maps", url: "https://maps.google.com" },
        { name: "Weather Forecast", url: "https://weather.com" },
        { name: "Currency Converter", url: "https://www.xe.com/" },
        { name: "Distance Calculator", url: "https://www.distancecalculator.net/" },
        { name: "Travel Checklist", url: "#" },
      ],
    },

    // ---- Emergency & Support ----
    {
      category: "Emergency & Support",
      items: [
        { name: "Police Helpline: 100", url: "tel:100" },
        { name: "Ambulance: 102", url: "tel:102" },
        { name: "Disaster Helpline: 108", url: "tel:108" },
        { name: "Passport Helpline", url: "https://portal2.passportindia.gov.in/" },
        { name: "Travel Insurance", url: "https://www.policybazaar.com/travel-insurance/" },
      ],
    },

    // ---- Govt & Policy Links ----
    {
      category: "Government & Travel Policies",
      items: [
        { name: "Visa Information", url: "https://indianvisaonline.gov.in/" },
        { name: "State Tourism Websites", url: "https://tourism.gov.in/" },
        { name: "Highway Toll Info (NHAI)", url: "https://nhai.gov.in/" },
        { name: "Refund Policy", url: "#" },
        { name: "Cancellation Policy", url: "#" },
      ],
    },
  ];

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact & Useful Trip Links</h1>

      {tripLinks.map((section, index) => (
        <div className="contact-section" key={index}>
          <h2 className="contact-category">{section.category}</h2>

          <div className="contact-cards">
            {section.items.map((item, idx) => (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                key={idx}
              >
                <p>{item.name}</p>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
