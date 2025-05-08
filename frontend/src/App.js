import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from "./components/Home/HomePage";
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import EventList from './components/Events/EventList';
import BookingHistory from './components/Bookings/BookingHistory';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      <Routes>
       <Route path="/" element={<HomePage />} />
        <Route path="/" element={isAuthenticated ? <Navigate to="/events" /> : <Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events" element={isAuthenticated ? <EventList /> : <Navigate to="/login" />} />
        <Route path="/bookings" element={isAuthenticated ? <BookingHistory /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;

