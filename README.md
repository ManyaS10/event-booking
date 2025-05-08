🎫 Event Booking System (MERN Stack)
This is a full-stack Event Booking System built with the MERN stack (MongoDB, Express, React, Node.js).

 Features
User Registration & Login (JWT Auth)

View available events

Book an event (only once)

View and cancel bookings

Protected routes

Responsive UI using Bootstrap

 Tech Stack
Frontend: React, Axios, Bootstrap

Backend: Node.js, Express, MongoDB, JWT

Database: MongoDB Atlas

📦 Setup Instructions
🔹 Backend
Navigate to the backend folder:

bash
Copy
Edit
cd event-booking-backend
Create a .env file:

env
Copy
Edit
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Install dependencies and run:

bash
Copy
Edit
npm install
npm run dev
🔹 Frontend
Navigate to the frontend folder:

bash
Copy
Edit
cd event-booking-frontend
Create a .env file:

env
Copy
Edit
REACT_APP_API_URL=http://localhost:5000/api
Install dependencies and run:

bash
Copy
Edit
npm install
npm start
✅ API Endpoints
POST /api/auth/register – Register new user

POST /api/auth/login – Login & get JWT

GET /api/events – View all events

POST /api/bookings/:eventId – Book event

GET /api/bookings – View booking history

DELETE /api/bookings/:bookingId – Cancel booking

THANKYOU
