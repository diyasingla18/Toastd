import React from "react";
import feedback from '../../assets/feedback.png';
import trending from '../../assets/trending.png';
import Start from '../../assets/Start.png';
import video from '../../assets/video.png';
import contact from '../../assets/contact.png';

function Footer() {
  return (
    <footer style={styles.footerContainer}>
      {/* Search Icon */}
      <div style={styles.iconContainer}>
        <img
          src={feedback}
          alt="Feedback"
          style={styles.icon}
        />
      </div>

      {/* Trending Icon */}
      <div style={styles.iconContainer}>
        <img
       src={trending}
          alt="Trending"
          style={styles.icon}
        />
      </div>

     {/* Start Icon */}
     <div style={styles.iconContainer}>
        <img
          src={Start}
          alt="Home"
          style={styles.icon}
        />
      </div>
      {/* Store Icon */}
      <div style={styles.iconContainer}>
        <img
          src={video}
          alt="video"
          style={styles.icon}
        />
      </div>

      {/* Video Icon */}
      <div style={styles.iconContainer}>
        <img
          src={contact}
          alt="Contact Us"
          style={styles.icon}
        />
      </div>
    </footer>
  );
}

const styles = {
  footerContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "60px",
    backgroundColor: "#fff",
    borderTop: "1px solid #ddd",
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
  iconContainer: {
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: "24px",
    height: "24px",
  },
  activeIcon: {
    backgroundColor: "#000",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Footer;