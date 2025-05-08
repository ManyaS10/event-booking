import React, { useEffect, useState } from 'react';
import API from '../../api';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await API.get('/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  const handleBook = async (eventId) => {
    try {
      await API.post(`/bookings/${eventId}`);
      alert('Event booked successfully!');
    } catch (error) {
      alert('Booking failed! Please login or try again.');
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">🎉 Available Events</h2>
      <div className="row">
        {events.length > 0 ? (
          events.map((event) => (
            <div className="col-md-4 mb-4" key={event._id}>
              <div className="card shadow-sm h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text">{event.description}</p>
                  <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                  <p><strong>Price:</strong> ₹{event.price}</p>
                  <button className="btn btn-primary mt-auto" onClick={() => handleBook(event._id)}>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No events available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default EventList;
