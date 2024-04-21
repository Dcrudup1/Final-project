import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";

import First from "../myimages/First.png";
import Second from "../myimages/Second.png";
import Third from "../myimages/Third.png";
import Fourth from "../myimages/Fourth.png";
import Boots from "../myimages/Boots.jpeg";
import Shirt from "../myimages/Toxic orange.jpeg";
import Pants from "../myimages/Pants.jpeg";
import Jacket from "../myimages/beige front.jpeg";
import Overalls from "../myimages/Overalls.jpeg";
import Toxictote1 from "../myimages/Toxictote1.jpeg"
import phonecase1 from "../myimages/black phone 1.jpeg"
import phonecase2 from "../myimages/blue phone 1.jpeg"
import Toxicgrey from '../myimages/Grey traits back.jpeg'
import Toxicshirt from '../myimages/Traits be nice.jpeg'

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [First, Second, Third, Fourth];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  // Mock data for catalog items
  const catalogItems = [
    {
      id: 1,
      name: "Toxic Biege",
      price: "$150",
      image: Jacket,
    },
    {
      id: 2,
      name: "Snowboard Tote Bag",
      price: "$80",
      image: Toxictote1,
    },
    {
      id: 3,
      name: "Black Snow Pants",
      price: "$120",
      image: Pants,
    },
    {
      id: 4,
      name: "Embrace Orange",
      price: "$110",
      image: Shirt,
    },
    {
      id: 5,
      name: "White Snowboard Boots",
      price: "$150",
      image: Boots,
    },
    {
      id: 6,
      name: "Snowboard Overalls",
      price: "$180",
      image: Overalls,
    },
    {
      id: 7,
      name: "Toxic Black Phone case",
      price: "$60",
      image: phonecase1,
    },
    {
      id: 8,
      name: "Toxic Blue Phone case",
      price: "$60",
      image: phonecase2,
    },
    {
      id: 9,
      name: "Toxic Grey",
      price: "$80",
      image: Toxicgrey,
    },
    {
      id: 10,
      name: "Toxic Be nice",
      price: "$80",
      image: Toxicshirt,
    },
    // Add more catalog items with their respective images
  ];

  return (
    <div className="home">
      <div className="slideshow-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? "active" : ""}
          />
        ))}
      </div>
      <div className="catalog-section">
        {catalogItems.map((item) => (
          <div key={item.id} className="catalog-item">
            <Link
              to={{
                pathname: `/item/${item.id}`,
                state: { itemData: item },
              }}
            >
              <div className="image-container">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="catalog-item-details">
                <h3>{item.name}</h3>
                <p>Price: {item.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;