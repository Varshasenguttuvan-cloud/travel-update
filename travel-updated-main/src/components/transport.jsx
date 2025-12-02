import React from "react";
import "./transport.css";

const transportOptions = [
  {
    type: "Flights",
    img: "https://travelbizmonitor.com/wp-content/uploads/2025/09/Akasa-Airs-maiden-flight-from-Mumbai-to-Phuket-arrives-at-Phuket-International-Airport.jpeg",
    links: [
      { name: "Indigo", url: "https://www.goindigo.in/", logo: "https://logos-world.net/wp-content/uploads/2023/01/IndiGo-Logo.png" },
      { name: "Air India", url: "https://www.airindia.in/", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRWdMJRkVX3xT4FCenWUNKX0CQjwCZYyO-w&s" },
      { name: "SpiceJet", url: "https://www.spicejet.com/", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEin41EEzRG3yLHrUJrfO8OXuxOfPuIj3XAT7sdtLKz-GWYCQNWKwKa9yuafVXaZ91C3A-PA8HpaBXVUvn_Xdjy91hrTVKGopW0wc-liQJjxZ33mwov1tR3oHwKa7v96oByUDXqlqoqD594O/s1600/spicejet.jpg" },
      { name: "Vistara", url: "https://www.airvistara.com/", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi2QJ91Kih3KkqLUWiRjfVPet_jhdYdCM6qQ&s" },
      { name: "MakeMyTrip Flights, (Comman for all flight service)", url: "https://www.makemytrip.com/flights/", logo: "https://play-lh.googleusercontent.com/19I7zjhAAAud9AztLiIxD1MYVdHusoeaW2-7Fx2FUJvcVZBbUBcGKjBBVPsHkFBLWMs" }
    ]
  },

  {
    type: "Trains",
    img: "https://www.livemint.com/lm-img/img/2025/01/03/1600x900/PTI10-23-2024-000260B-0_1735899428458_1735899449025.jpg",
    links: [
      { name: "IRCTC", url: "https://www.irctc.co.in/", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GWN-NDRMxpohIlcT0xgbwgINfE_dnmr_xg&s" },
      { name: "ConfirmTkt", url: "https://www.confirmtkt.com/", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZsfpRaQO46cB94SW9vYb1AdurZG-WdrgWw&s" },
      { name: "RailYatri", url: "https://www.railyatri.in/", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStXurQIDlPs-zffZSe8ycs5D6zbRC6U_zGwQ&s" },
      { name: "Ixigo Train", url: "https://www.ixigo.com/trains", logo: "https://play-lh.googleusercontent.com/hqBIT_YHJYDbNtsiL79ai6CQtgblYjT7bAVrPO0idwyHOKdZUAD_hzTGqniM6l6rbRY" },
      { name: "MakeMyTrip Train(Comman for all train service)", url: "https://www.makemytrip.com/railways/", logo: "https://images.seeklogo.com/logo-png/33/1/makemytrip-logo-png_seeklogo-336111.png" },
    ]
  },
  {
    type: "Bus",
    img: "https://i0.wp.com/asombarta.com/wp-content/uploads/2024/02/Bus-1-scaled.jpg?resize=1140%2C570&ssl=1",
    links: [
      { name: "RedBus", url: "https://www.redbus.in/",logo:"https://telecomtalk.info/wp-content/uploads/2018/08/red-bus-india-google-maps-1200x720.png" },
      { name: "AbhiBus", url: "https://www.abhibus.com/",logo:"https://upload.wikimedia.org/wikipedia/commons/9/90/Abhibus-icon_%281%29.png"  },
      { name: "ZingBus", url: "https://www.zingbus.com/",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzgJYxlVt6npyrAHtoNU2MJZZNyOwefIsY5A&s" },
      { name: "Goibibo Bus", url: "https://www.goibibo.com/bus/",logo:"https://images.seeklogo.com/logo-png/30/2/goibibo-logo-png_seeklogo-305530.png" },
      { name: "MakeMyTrip Bus", url: "https://www.makemytrip.com/bus-tickets/",logo:"https://images.seeklogo.com/logo-png/33/1/makemytrip-logo-png_seeklogo-336111.png" },
    ]
  },
  {
    type: "Cabs / Taxi",
    img: "https://media.istockphoto.com/id/1209958212/photo/2020-kia-sportage-suv.jpg?s=612x612&w=0&k=20&c=fvHbiOH2_xRhOAtr47Gae7kayIFB28n8poRdCKGsj_g=",
    links: [
      { name: "Ola", url: "https://www.olacabs.com/",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR56NFlZg4u4xUyNLNBOoX835Lh-bXr1gi-MA&s" },
      { name: "Uber", url: "https://www.uber.com/",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnM8U7Fu9UbOMCakFdEen8a8sl_EavE10XHw&s" },
      { name: "Rapido", url: "https://rapido.bike/" ,logo:"https://animationvisarts.com/wp-content/uploads/2023/10/Rapido.png"},
      { name: "Meru Cabs", url: "https://www.meru.in/",logo:"https://images.jdmagicbox.com/v2/comp/delhi/j8/011pxx11.xx11.221124205055.m5j8/catalogue/meru-cab-services-delhi-car-rental-ajgcjbaqra.jpg" },
      { name: "BluSmart", url: "https://www.blu-smart.com/",logo:"https://ipventures.in/wp-content/uploads/2017/12/Blusmart.jpg" }
    ]
  },
  {
  type: "Metro / Urban Rail",
  img: "https://i.ytimg.com/vi/LRt08SBJgYo/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGFggXihlMA8=&rs=AOn4CLA9y52ymufDr0w3-W3I4cVnnC9tEg",
  links: [
    { name: "Delhi Metro", url: "http://www.delhimetrorail.com/", logo: "https://ih1.redbubble.net/image.5478280721.6347/st,small,507x507-pad,600x600,f8f8f8.webp" },
    { name: "Mumbai Metro", url: "https://www.mumbaimetro.org/", logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/Mumbai_Metro_Logo.svg" },
    { name: "Bangalore Metro (Namma Metro)", url: "https://english.bmrc.co.in/", logo: "https://upload.wikimedia.org/wikipedia/en/f/fb/Namma_Metro_logo.png" },
    { name: "Kolkata Metro", url: "http://www.kolmetro.com/", logo: "https://upload.wikimedia.org/wikipedia/en/0/0b/Kolkata_Metro_logo.png" },
    { name: "Hyderabad Metro", url: "https://www.hmr.gov.in/", logo: "https://upload.wikimedia.org/wikipedia/en/5/5f/Hyderabad_Metro_Logo.png" }
  ]
},

{
  type: "Water Transport / Ferries",
  img: "https://static.independent.co.uk/2025/10/27/13/52/1720729733_RCI-PDC-202408-CC-FMonster-Departure-Photos-0154.jpg",
  links: [
    { name: "Kerala Houseboats & Ferries", url: "https://www.keralatourism.org/", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Kerala_Tourism_Logo.png" },
    { name: "Goa Ferry Services", url: "https://www.goatourism.gov.in/", logo: "https://upload.wikimedia.org/wikipedia/en/e/e0/Goa_Tourism_logo.png" },
    { name: "Sundarbans River Cruise", url: "https://www.wbtourismgov.in/", logo: "https://upload.wikimedia.org/wikipedia/en/f/f5/West_Bengal_Tourism_logo.png" },
    { name: "Andaman Sea Ferries", url: "https://www.andamantourism.gov.in/", logo: "https://upload.wikimedia.org/wikipedia/en/1/1d/Andaman_Tourism_Logo.png" },
    { name: "Vembanad Lake Cruises (Kerala)", url: "https://www.keralatourism.org/houseboat-cruises/", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Kerala_Tourism_Logo.png" }
  ]
}

];

export default function Transport() {
  return (
    <div className="transport-wrapper">
      <h1 className="main-title">Transport Options</h1>

      {transportOptions.map((section, index) => (
        <div key={index} className="transport-section">

          {/* Title at top */}
          <h2 className="section-title">{section.type}</h2>

          {/* Banner Image */}
          <img src={section.img} alt={section.type} className="section-banner" />

          {/* Booking Cards */}
          <div className="card-container">
            {section.links.map((link, i) => (
              <div key={i} className="booking-card">
                <img src={link.logo} alt={link.name} className="card-logo" />

                <h3 className="card-title">{link.name}</h3>

                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="book-btn"
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
