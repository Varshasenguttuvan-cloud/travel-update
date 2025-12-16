import React from "react";
import { useParams } from "react-router-dom";
import "./PlaceDetails.css";

function PlaceDetails() {
  const { placeName } = useParams();
  const decodedPlaceName = decodeURIComponent(placeName);

  // 🔹 Hardcoded place details
  const placeDetails = {
    "Tirupati Temple": {
      name: "Tirupati Temple",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Tirumala_Anand_nilayam4653.jpg/1200px-Tirumala_Anand_nilayam4653.jpg",
      desc: `Tirupati Temple, also known as the Tirumala Venkateswara Temple, 
      is one of the most sacred Hindu temples in the world. It is located on the 
      Tirumala hills in Andhra Pradesh and is dedicated to Lord Venkateswara, 
      an incarnation of Lord Vishnu.

      Millions of devotees visit this temple every year. It is also one of the 
      richest religious institutions in the world, famous for its Laddu Prasadam 
      and spiritual significance.  The Venkateswara Temple of Tirumala or Sri Venkateswara Swami Temple is a Hindu temple situated in the hills of Tirumala, Tirupati Urban Mandal in the Tirupati district of Andhra Pradesh, India. The temple is dedicated to Venkateswara, a form of god Vishnu, who is believed to have appeared on earth to save mankind from trials and troubles of Kali Yuga. Hence the place is also known by the name Kaliyuga Vaikuntha and the deity here is referred to as Kaliyuga Prathyaksha Daivam. The temple is also known by other names like Tirumala Temple, Tirupati Temple and Tirupati Balaji Temple. Venkateswara is also known by other names including Balaji, Govinda, and Srinivasa.[4] The temple is run by Tirumala Tirupati Devasthanams (TTD), which is under control of Andhra Pradesh Government. The head of TTD is appointed by Andhra Pradesh Government.

Tirumala hills are part of Seshachalam Hills range. The hills are 853 metres (2,799 ft) above sea level and comprise seven peaks, representing the seven heads of Adisesha. The temple lies on the seventh peak—Venkatadri, on the southern banks of Sri Swami Pushkarini, a holy water tank. Hence the temple is also referred to as "Temple of Seven Hills".[5] Tirumala town covers an area of about 10.33 sq mi (26.75 km2).

The temple of Venkateswara was built by Thondaman king and reformed periodically by Cholas, Pandyas and Vijayanagar. The temple is constructed in Dravidian architecture and is believed to be constructed over a period of time starting from 300 CE.[6] The Garbhagriha (Sanctum Sanctorum) is called Ananda Nilayam. The presiding deity, Venkateswara, is in standing posture and faces east in Garbha Gruha. The temple follows Vaikhanasa Agama tradition of worship. The temple is one of the eight Vishnu Swayambhu (self-manifested) Kshetras and is listed as the 75th Divya Desam, one of the 108 temples mentioned in the Naalayira Divya Prabandham. The Temple premises have two modern Queue complex buildings to manage the pilgrim crowd, Tarigonda Vengamamba Annaprasadam complex for free meals to Pilgrims, hair tonsure buildings and a number of pilgrim lodging sites. The temple is one of the richest in the world in terms of donations received and wealth.[7][8][9]

There are several legends associated with the manifestation of the deity in Tirumala. According to one legend, the temple has a murti of Venkateswara, is “Nitya-daiva-kalpa” — the eternal deity which shall remain on Venkatachala (Tirumala) until the entire duration of the present Kalpa.[10][11]

The temple is one of the world's most visited religious sites, attracts around 24 million devotees annually.[12] The average daily pilgrim footfall is above 60,000 devotees, and the number crosses one lakh devotees during the annual Brahmotsavams, Vaikunta Ekadasi, and other festival and holiday seasons.[12]

`
    }
  };

  const place = placeDetails[decodedPlaceName];

  if (!place) {
    return <h2 style={{ textAlign: "center" }}>Place not found</h2>;
  }

  return (
    <div className="place-details">
      <h1>{place.name}</h1>
      <img src={place.img} alt={place.name} />
      <p>{place.desc}</p>
    </div>
  );
}

export default PlaceDetails;
