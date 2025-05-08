import React from "react";
import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            EventBooking
          </Link>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center text-white" style={{
        background: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb') center center/cover no-repeat",
        height: "100vh"
      }}>
        <div className="container text-center">
          <div className="p-5 bg-dark bg-opacity-75 rounded shadow-lg mx-auto" style={{ maxWidth: "600px" }}>
            <h1 className="display-4 fw-bold">Welcome to Event Booking System</h1>
            <p className="lead mt-3">Discover, book, and manage events seamlessly.</p>
            <div className="mt-4">
              <Link to="/events" className="btn btn-warning btn-lg me-3">View Events</Link>
              <Link to="/register" className="btn btn-outline-light btn-lg">Get Started</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
