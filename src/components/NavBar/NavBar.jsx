import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/logo.png"; // Assuming you have a logo file

const NavBar = ({ onCategoryChange, onSortChange }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false); // State for toggling nav links

  const categories = [
    "New Products",
    "Big Gifts",
    "Giftable Gadgets",
    "Gifts for Him",
    "Gifts for Her",
    "Gifts under Budget",
  ];

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Automatically change category based on search match
    const matchedCategory = categories.find((category) =>
      category.toLowerCase().includes(query.toLowerCase())
    );

    if (matchedCategory) {
      onCategoryChange(matchedCategory);
    }
  };

  const handleCategoryClick = (category) => {
    setSearchQuery(""); // Clear search query on direct category click
    onCategoryChange(category);
  };

  const handleSortChange = (sortOption) => {
    onSortChange(sortOption);
  };

  const toggleNavLinks = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <img src={logo} alt="Logo" className="logo" />

        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>

        <button className="menu-toggle" onClick={toggleNavLinks}>
          &#9776;
        </button>

        <ul className={`nav-links ${isNavOpen ? "active" : ""}`}>
          {categories.map((category) => (
            <li key={category} onClick={() => handleCategoryClick(category)}>
              {category}
            </li>
          ))}
        </ul>

        <Link to="/signup">
          <button className="sign-up-btn">Sign Up</button>
        </Link>
      </div>

      <div className="sort-container">
        <button className="sort-btn">Sort By</button>
        <div className="sort-dropdown-content">
          <a onClick={() => handleSortChange("Trending")}>Trending</a>
          <a onClick={() => handleSortChange("Most Viewed")}>Most Viewed</a>
          <a onClick={() => handleSortChange("Most Voted")}>Most Voted</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
