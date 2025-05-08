import React, { useEffect, useState } from 'react';
import API from '../../api';

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await API.get('/bookings/my-bookings');
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };
    fetchBookings();
  }, []);

  const handleCancel = async (bookingId) => {
    try {
      await API.patch(`/bookings/cancel-booking/${bookingId}`);
      alert('Booking canceled successfully!');
      setBookings(bookings.map((booking) => booking._id === bookingId ? { ...booking, status: 'Cancelled' } : booking));
    } catch (error) {
      alert('Cancellation failed!');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">My Bookings</h2>
      {bookings.length === 0 ? (
        <p className="text-center">You have no bookings yet!</p>
      ) : (
        <div className="row">
          {bookings.map((booking) => (
            <div key={booking._id} className="col-md-4 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{booking.event.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {new Date(booking.event.date).toLocaleDateString()}
                  </h6>
                  <p className="card-text">
                    <strong>Status:</strong> {booking.status}
                  </p>
                  {booking.status === 'Booked' && (
                    <button
                      className="btn btn-danger"
                      onClick={() => handleCancel(booking._id)}
                    >
                      Cancel Booking
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingHistory;
