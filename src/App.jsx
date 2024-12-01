import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';
import ProductPage from './components/ProductPage/ProductPage';
import SignupPage from './components/SignupPage/SignupPage';

const AppContent = () => {
  const location = useLocation();
  const [category, setCategory] = useState('New Products');
  const [subtitle, setSubtitle] = useState('Discover the most unique gifts of the season!');
  const [sortOption, setSortOption] = useState('trending');

  // Handle navbar item clicks to update the Hero section dynamically
  const handleCategoryChange = (category) => {
    setCategory(category);
    switch (category) {
      case 'New Products':
        setSubtitle('Discover the most unique gifts of the season!');
        break;
      case 'Big Gifts':
        setSubtitle('Make a statement with grand, unforgettable gifts!');
        break;
      case 'Giftable Gadgets':
        setSubtitle('Innovative gadgets perfect for any tech enthusiast!');
        break;
      case 'Gifts for Him':
        setSubtitle('Find gifts that are tailored for the men in your life!');
        break;
      case 'Gifts for Her':
        setSubtitle('Show her how special she is with thoughtful gifts!');
        break;
      case 'Gifts under Budget':
        setSubtitle('Amazing gifts that don’t break the bank!');
        break;
      default:
        setSubtitle('');
    }
  };

  // Handle sort option change from NavBar
  const handleSortChange = (option) => {
    setSortOption(option);
  };

  // Determine whether to hide NavBar and Footer on /signup or any product page
  const hideNavBarFooter = location.pathname === '/signup' || location.pathname.startsWith('/product');

  return (
    <div>
      {/* Show NavBar and Footer unless on Signup or Product pages */}
      {!hideNavBarFooter && <NavBar onCategoryChange={handleCategoryChange} onSortChange={handleSortChange} />}

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero title={category} subtitle={subtitle} />
              <Section sortOption={sortOption} />
            </div>
          }
        />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>

      {/* Show Footer unless on Signup or Product pages */}
      {!hideNavBarFooter && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
