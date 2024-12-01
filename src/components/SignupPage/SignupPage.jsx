
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apple from "../../assets/apple.png";
import google from "../../assets/google.png";
import Graphic from "../../assets/Graphic.jpg";
import Toastd from "../../assets/Toastd.png";

function SignupPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    general: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = { username: "", email: "", password: "", confirmPassword: "", general: "" };

    if (formData.username.length < 3) {
      formErrors.username = "Username must be at least 3 characters long";
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(formData.email)) {
      formErrors.email = "Please enter a valid email address";
    }

    if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters long";
    }

    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
    }

    const existingData = JSON.parse(localStorage.getItem(formData.email));
    if (existingData && existingData.password !== formData.password) {
      formErrors.general = "This email is already registered with a different password";
    }

    setErrors(formErrors);
    return Object.values(formErrors).every((error) => error === "");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Sign up data:", formData);
      localStorage.setItem(
        formData.email,
        JSON.stringify({ username: formData.username, password: formData.password })
      );
      navigate("/");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftSection}>
        <img src={Toastd} alt="Toastd Logo" style={styles.logo} />
        <p style={styles.subtitle}>
          To discover, vote, and get exclusive discounts, sign up to Toastd
          below.
        </p>
        <button style={styles.appleButton}>
          <img src={apple} alt="Apple Logo" style={styles.icon} />
          Sign in with Apple
        </button>
        <button style={styles.googleButton}>
          <img src={google} alt="Google Logo" style={styles.icon} />
          Sign in with Google
        </button>
        <form onSubmit={handleFormSubmit} style={styles.form}>
          <p style={styles.orText}>OR</p>
          <label style={styles.label}>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.username && <span style={styles.errorText}>{errors.username}</span>}
          </label>
          <label style={styles.label}>
            E-Mail Address:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.email && <span style={styles.errorText}>{errors.email}</span>}
          </label>
          <label style={styles.label}>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.password && <span style={styles.errorText}>{errors.password}</span>}
          </label>
          <label style={styles.label}>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.confirmPassword && <span style={styles.errorText}>{errors.confirmPassword}</span>}
          </label>
          {errors.general && <span style={styles.errorText}>{errors.general}</span>}
          <button type="submit" style={styles.submitButton}>
            Continue with email
          </button>
        </form>
        <p style={styles.terms}>
          By signing up to Toastd, you agree to our{" "}
          <a href="/terms" style={styles.link}>
            terms
          </a>{" "}
          and{" "}
          <a href="/privacy-policy" style={styles.link}>
            privacy policy
          </a>
          .
        </p>
      </div>
      <div style={styles.rightSection}>
        <img src={Graphic} alt="Promotional Graphic" style={styles.image} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
    flexDirection: "row",
  },
  leftSection: {
    flex: 1,
    padding: "40px",
    backgroundColor: "#f8f9fa",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  rightSection: {
    flex: 1,
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e9ecef",
  },
  logo: {
    width: "220px",
    marginBottom: "0px",
  },
  subtitle: {
    fontSize: "14px",
    marginBottom: "20px",
    textAlign: "center",
  },
  appleButton: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    marginBottom: "10px",
    width: "80%",
    textAlign: "center",
  },
  googleButton: {
    backgroundColor: "#fff",
    color: "#000",
    padding: "10px 20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "80%",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: "16px",
    marginRight: "10px",
  },
  form: {
    marginTop: "20px",
    width: "80%",
    textAlign: "center",
  },
  orText: {
    marginBottom: "10px",
    fontSize: "14px",
  },
  label: {
    display: "block",
    textAlign: "left",
    width: "100%",
    marginBottom: "10px",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  submitButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
  },
  terms: {
    marginTop: "20px",
    fontSize: "12px",
    color: "#666",
    textAlign: "center",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
  image: {
    width: "111%",
    height: "111%",
  },
  errorText: {
    color: "red",
    fontSize: "12px",
    textAlign: "left",
    marginTop: "5px",
  },
  // Responsive Design - Mobile Screens
  "@media (max-width: 768px)": {
    container: {
      flexDirection: "column",
    },
    leftSection: {
      padding: "20px",
    },
    rightSection: {
      padding: "20px",
    },
    logo: {
      width: "180px",
    },
    subtitle: {
      fontSize: "12px",
    },
    appleButton: {
      width: "90%",
    },
    googleButton: {
      width: "90%",
    },
    form: {
      width: "100%",
    },
    submitButton: {
      width: "100%",
    },
  },
};

export default SignupPage;
