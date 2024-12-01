

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";

// Import all product images
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import product4 from "../../assets/product4.png";
import product5 from "../../assets/product5.png";
import product6 from "../../assets/product6.png";

// Product data object
const productData = {
  1: {
    title: "100% Natural Death by Chocolate Protein Bar",
    subtitle: "24g Protein, Box of 12",
    description: `Fuelled Protein Bars - The Ultimate Snack for Those Who Refuse to Settle`,
    details: 'Imagine biting into rich, decadent chocolate or the bold taste of espresso, with a texture that is just right—not too chewy, not too dry. With Fuelled Protein Bars, you get a snack that feels like an indulgence but works like fuel for your body. Each bar packs 15g of high-quality protein to keep you going strong, only 6g of net carbs to fit effortlessly into any low-carb diet, and a mere 2g of sugar—all without sacrificing flavor. These are not your average protein bars; they are designed to satisfy real cravings while supporting serious goals. Think of it as the treat you deserve, with the nutrition you need. Whether you are at the gym, in the office, or on the road, Fuelled Protein Bars are the perfect companion for a life on the go.',
    features: ["Indulgent Taste, Zero Guilt", "Power-Packed Nutrition", "Convenient & Clean"],
    pricing: {
      discountedPrice: "₹1784.15",
      originalPrice: "₹2099",
      discountTag: "15% OFF YOUR ORDER",
    },
    image: product1,
    launchDate: "November 8, 2024",
    buyLink: "https://fuelled.in/products/protein-bars?variant=42176588054712",
  },
  2: {
    title: "Protein Water- 24g, pack of 12",
    subtitle: "Supr Protein Water - 24g Protein",
    description: "Quantity- 330 ml. Enjoy a delightful trio of flavors—Berry Blast, Grape Frost, and Lemonade.",
    details: 'Imagine reaching for a drink that doesnot just quench your thirst, but fuels your entire day. The SUPR Protein Water Variety Pack is crafted for people who believe hydration and nutrition should not be a compromise. With each bottle packed with 24g of protein and 7g of BCAAs, this is not just water—it is a complete recovery and energy-boosting experience, designed to support every rep, every run, and every hustle. SUPR Protein Water is not loaded with sugars or artificial fillers. It is refreshingly simple, yet powerful, with three clean, bold flavors—Berry Blast, Grape Frost, and Lemonade—each bottle designed to satisfy your taste buds without a single drop of guilt. This is hydration as it should be: pure, potent, and packed with everything you need. ',
    features: ["More Than Just Water", "Clean and Powerful", "Refreshing Flavours"],
    pricing: {
      discountedPrice: "₹1200.00",
      originalPrice: "₹1500.00",
      discountTag: "20% OFF YOUR ORDER",
    },
    image: product2,
    launchDate: "December 1, 2024",
    buyLink: "https://suprwater.com/products/variety-pack",
  },
  3: {
    title: "Virat Kohli Canvas Wall Art",
    subtitle: "Virat Kohli - Mindset",
    description: "Motivational Wall Art is Important. Product Specifications- 30*15 inches",
    details: 'What if every time you looked up, you saw the intensity and determination of one of the world greatest athletes staring back at you? Virat Kohli Mindset wall art is not just a decoration—it is a daily reminder that success is not just a goal; it is a mindset. With each glance, feel the energy of Kohli commitment to excellence inspiring you to push harder, stay focused, and give nothing less than your best.Imagine this powerful image on your wall, challenging you to break boundaries, redefine limits, and pursue greatness, day in and day out. Crafted with high-definition precision on eco-friendly canvas, this piece captures Kohli fierce expression, motivating you from the moment you step into the room.',
    features: ["Quality Craftsmanship", "Ready to Inspire", "Built to Endure"],
    pricing: {
      discountedPrice: "₹2200.00",
      originalPrice: "₹2500.00",
      discountTag: "12% OFF YOUR ORDER",
    },
    image: product3,
    launchDate: "January 1, 2024",
    buyLink: "https://redroar.in/products/virat-kohli-mindset?variant=42809266372642",
  },
  4: {
    title: "Hibiscus Monkey Body Wash - Cardamom Zen",
    subtitle: "Body Wash - Cardamom Zen",
    description: "Aroma & Mood: Soothing Cardamom Zen, For normal and sensitive skin type, 200ml",
    details: 'Imagine stepping into your shower, the air filling with the warm, inviting scent of cardamom. With each lather, Cardamom Zen Body Wash from Hibiscus Monkey gently caresses your skin, leaving it soft, balanced, and refreshed. This is not just a body wash—it is a ritual in self-care, meticulously crafted to restore your skin natural microbiome and leave you feeling centered and revived.Why is Cardamom Zen different? At the heart of this body wash is the 3 Biotics System™, a breakthrough blend of probiotics, prebiotics, and postbiotics designed to support your skin health from within. This formula respects your skin natural defenses, maintaining a pH balance that leaves it nourished, hydrated, and resilient. And with pure botanical ingredients like Himalayan apricot oil and aloe vera, it is a shower experience that feels as good as it is for you.',
    features: ["With the 3 Biotics System", "Pure and Gentle", "A Scent Like No Other"],
    pricing: {
      discountedPrice: "₹1900.00",
      originalPrice: "₹2300.00",
      discountTag: "15% OFF YOUR ORDER",
    },
    image: product4,
    launchDate: "February 1, 2025",
    buyLink: "https://www.hibiscusmonkey.com/products/body-wash-cardamom-zen",
  },
  5: {
    title: "Himalayan Shilajit Resin",
    subtitle: "Kapiva Himalayan Shilajit Resin",
    description: "Kapiva Himalayan Shilajit Resin takes 2-3 months to show results (Trusted by 5 Lakh users)",
    details: 'From the untouched heights of the Himalayas comes a natural supplement unlike any other—Kapiva Himalayan Shilajit Resin. For centuries, Ayurvedic practitioners have known the remarkable benefits of shilajit. Now, with Kapiva commitment to purity and quality, this ancient powerhouse is available to elevate your stamina, energy, and well-being to new heights.Why settle for less than nature finest? Kapiva Himalayan Shilajit is crafted to bring you the best of traditional wisdom with modern science. Purified with Triphala for maximum potency and rich in fulvic acid and over 80 essential minerals, it is designed to fuel your body and mind like never before. This is a supplement for those who demand more from life—those who believe in a balanced blend of physical energy and mental clarity. What can you expect?Boundless, sustained energy and sharper focus, ideal for anyone who leads an active lifestyle or seeks a natural edge in performance. This resin doesnot just mask fatigue; it addresses the source. Simply dissolve a small amount in warm water or milk, and feel the difference as Kapiva Shilajit revitalizes you from within. Rediscover what it feels like to be energized, strong, and focused. With Kapiva Himalayan Shilajit Resin, wellness is no longer a dream. It is a daily reality.',
    features: ["Endurance Redefined", "Powerful Detox", "Optimal Recovery"],
    pricing: {
      discountedPrice: "₹2100.00",
      originalPrice: "₹2700.00",
      discountTag: "22% OFF YOUR ORDER",
    },
    image: product5,
    launchDate: "March 1, 2025",
    buyLink: "https://kapiva.in/mens-health/kapiva-himalayan-shilajit-resin-20g",
  },
  6: {
    title: "Intensive Hair Growth Serum - 30ml",
    subtitle: "Arata Intensive Hair Growth Serum",
    description: "Boosts hair regrowth | Activates dormant follicles | Reduces hair thinning",
    details: 'Imagine waking up each morning with hair that looks richer, fuller, and healthier than the day before. With Arata Intensive Hair Growth Serum, that dream can be a reality. This is not just a serum—it is the answer to hair thinning, breakage, and the endless search for a solution that truly works.What makes Arata serum different? Behind every bottle is a formula designed to give you results. Arata has carefully combined 3% Redensyl, 3% Procapil, and 5% Kopexil—advanced ingredients scientifically proven to reactivate dormant follicles, nourish each strand from root to tip, and promote natural hair growth. These are not buzzwords. This is proven science. And for the first time, it is available in a serum that is lightweight, easy to use, and fast-absorbing. The Difference is in the Details This serum goes further by including the best of nature: rice water, onion extract, and turmeric. Together, these botanical ingredients feed your scalp, protect against damage, and add the strength you need to face the day with confidence. See a difference in just 30 days. Get ready for a new chapter in your hair care journey with Arata Intensive Hair Growth Serum. Because great hair does not happen by accident—it happens by design.',
    features: ["Thicker, denser hair", "Fuller Volume", "Natural Look"],
    pricing: {
      discountedPrice: "₹2500.00",
      originalPrice: "₹3000.00",
      discountTag: "17% OFF YOUR ORDER",
    },
    image: product6,
    launchDate: "April 1, 2025",
    buyLink: "https://www.arata.in/products/arata-intensive-hair-growth-serum-30ml",
  },
};

const ProductPage = () => {
  const { id } = useParams(); // Get the product ID from the route
  const product = productData[id]; // Fetch product details

  if (!product) {
    return <div>Product not found</div>;
  }

  const [showShipping, setShowShipping] = useState(false);
  const [showReturn, setShowReturn] = useState(false);

  return (
    <div className="product-page">
      {/* Product Image Section */}
      <div className="product-image-section">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>

      {/* Product Details Section */}
      <div className="product-details">
        <h1>{product.title}</h1>
        <p className="subtitle">{product.subtitle}</p>

        {/* Description Section */}
        <div className="description-section">
          <p className="description">{product.description}</p>
          <p className="details">{product.details}</p>
        </div>

        <h2>Why You'll Love It</h2>
        <ul className="features-list">
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <div className="pricing">
          <div className="discount-box">{product.pricing.discountTag}</div>
          <p className="discounted-price">{product.pricing.discountedPrice}</p>
          <p className="original-price">{product.pricing.originalPrice}</p>
        </div>

        {/* Action Buttons */}
        <div className="actions">
          <a 
            href={product.buyLink}
            className="buy-now-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Now
          </a>
          <button className="upvote-btn">Upvote</button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="categories-section">
        <h2>Categories</h2>
        <p>Gifting</p>
        <h2>Values</h2>
        <p>Science Backed</p>
        <h2>Launched on</h2>
        <p>{product.launchDate}</p>
      </div>

      {/* Dropdown Menus Section */}
      <div className="dropdown-section">
        <div className="dropdown">
          <div
            className="dropdown-header"
            onClick={() => setShowShipping(!showShipping)}
          >
            Shipping
            <span className="dropdown-arrow">{showShipping ? "▲" : "▼"}</span>
          </div>
          {showShipping && (
            <div className="dropdown-content">
              Get free shipping and returns across India
            </div>
          )}
        </div>

        <div className="dropdown">
          <div
            className="dropdown-header"
            onClick={() => setShowReturn(!showReturn)}
          >
            Return
            <span className="dropdown-arrow">{showReturn ? "▲" : "▼"}</span>
          </div>
          {showReturn && (
            <div className="dropdown-content">
              We offer a full refund if you are unsatisfied with your product.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
