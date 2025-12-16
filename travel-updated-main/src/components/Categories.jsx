import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";



const categories = [
  {
    id: 1,
    name: "Temples",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFCMY1zxcYrAUhfQNCFZuM0cAxSKC9JANCDw&s",
  },
  {
    id: 2,
    name: "Nature",
    image: "https://t3.ftcdn.net/jpg/05/81/72/66/360_F_581726640_F5cvpFG8YAvgXdNDOm7nGlDxldiJFH8o.jpg",
  },
  {
    id: 3,
    name: "Beaches",
    image: "https://media.easemytrip.com/media/Blog/India/637778509878078349/637778509878078349zqTo0M.jpg",
  },
  {
    id: 4,
    name: "Heritage Sites",
    image: "https://img.jagranjosh.com/images/2022/April/1842022/world_heritage.webp",
  },
  {
    id: 5,
    name: "Hill Stations",
    image: "https://www.cleartrip.com/collections/wp-content/uploads/2018/12/Kalpa.jpg",
  },
  {
    id: 6,
    name: "Adventure",
    image: "https://indiaholidaymall.com/images/blog/Annapurna-Base-Camp-Trek.jpg",
  },
  {
    id: 7,
    name: "Wildlife",
    image: "https://easemytrip.com/travel/img/wildlife-safari-tours-india.jpg",
  },
  {
    id: 8,
    name: "Waterfalls",
    image: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/08/1200/675/jog-falls-india.jpg?ve=1&tl=1",
  },
  {
    id: 9,
    name: "Lakes",
    image: "https://resize.indiatvnews.com/en/resize/oldbucket/1200_-/mainnational/IndiaTvfaab8b_main.jpg",
  },
  {
    id: 10,
    name: "Caves",
    image: "https://images.cnbctv18.com/wp-content/uploads/2023/06/Borra-Caves.jpg?impolicy=website&width=1200&height=900",
  },
  {
    id: 11,
    name: "Desert Tours",
    image: "https://storage.googleapis.com/stateless-www-justwravel-com/2017/02/justwravel_rajasthan3-scaled.jpg",
  },
  {
    id: 12,
    name: "City Tours",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/11/d8/17/caption.jpg?w=500&h=400&s=1",
  }
];


function Categories() {
  const navigate = useNavigate();

  return (
    <section className="categories">
      <h1>Categories</h1>
      <div className="category-grid">
        {categories.map((cat) => (
          <div
            className="category-card"
            key={cat.id}
            onClick={() => navigate(`/categories/${cat.name}`)}
          >
            <img src={cat.image} alt={cat.name} />
            <div className="category-name">{cat.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;