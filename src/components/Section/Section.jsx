import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Section.css';

const products = [
  { id: 1, title: "Death By Chocolate - Protein Bars", description: "The Most Delicious High-Protein, Low-Calorie Bar Out There.", votes: 1, views: 100 },
  { id: 2, title: "Supr Protein Water - 24g Protein", description: "Pack of 12 will contain 4 bottles of each flavour.", votes: 0, views: 150 },
  { id: 3, title: "Virat Kohli - Mindset", description: "Big or small Anything Is Better Than Blank Wall", votes: 0, views: 200 },
  { id: 4, title: "Body Wash - Cardamom Zen", description: "Hibiscus Monkey Body Wash, the first of its kind, is made with Probiotics.", votes: 0, views: 50 },
  { id: 5, title: "Kapiva Himalayan Shilajit Resin", description: "One of the most trusted products to increase stamina and strength.", votes: 0, views: 300 },
  { id: 6, title: "Arata Intensive Hair Growth Serum", description: "Give Your Hair the Power to Grow Stronger, Thicker, and Healthier Every Day.", votes: 2, views: 250 },
];

const Section = ({ sortOption }) => {
  const [sortedProducts, setSortedProducts] = useState(products);

  useEffect(() => {
    let sorted = [...products];
    if (sortOption === 'Trending') {
      sorted = sorted.sort((a, b) => b.views - a.views);
    } else if (sortOption === 'Most Voted') {
      sorted = sorted.sort((a, b) => b.votes - a.votes);
    } else {
      sorted = sorted.sort((a, b) => a.id - b.id); // Default sorting by ID or another logic
    }
    setSortedProducts(sorted);
  }, [sortOption]);

  return (
    <div className="section-container">
      {sortedProducts.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id} className="product-card">
          <div className="product-info">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
          </div>
          <div className="vote-section">
            <button className="vote-button">↑</button>
            <span className="vote-count">{product.votes}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Section;

