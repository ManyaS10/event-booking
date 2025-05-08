# 🎫 Event Booking System (MERN Stack)

This is a full-stack Event Booking System built with the **MERN stack** – MongoDB, Express, React, and Node.js.

---

## 🚀 Features

- ✅ User Registration & Login (JWT Auth)
- 🎟️ View available events
- 📅 Book an event (only once)
- 📂 View and cancel bookings
- 🔒 Protected routes
- 💻 Responsive UI using Bootstrap

---

## 🛠️ Tech Stack

- **Frontend**: React, Axios, Bootstrap  
- **Backend**: Node.js, Express, MongoDB, JWT  
- **Database**: MongoDB Atlas

---

## 📦 Setup Instructions

### 🔹 Backend

1. Navigate to the backend folder:
   ```bash
   cd event-booking-backend
2. Create a .env file:
3. Install dependencies and run the server:
npm install
npm run dev



### Frontend

1. Navigate to the frontend folder:
 cd event-booking-frontend
2.Create a .env file:
3. Install dependencies and run the frontend:
   npm install
   npm start


  ✅ API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login & get JWT token
GET	/api/events	View all events
POST	/api/bookings/:eventId	Book an event
GET	/api/bookings	View booking history
DELETE	/api/bookings/:bookingId	Cancel a booking

🙋‍♀️ Author
Made with ❤️ by [Manya]

📌 Note
This is a basic version for learning and demo purposes. You can enhance it by adding:

Admin dashboard

Payment gateway integration

Event search & filter

Email notifications
Thankyou


