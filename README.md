# User Management Dashboard

## Objective
Build a full-stack web application where users can be **added, viewed, edited, and deleted** from a dashboard. The app uses **React.js** for the frontend and **Node.js with Express** for the backend, connected to a database.

---

## Tech Stack

**Frontend:**
- React.js (functional components + hooks)
- React Router
- Axios or Fetch API
- Optional: Tailwind CSS, Bootstrap, or plain CSS

**Backend:**
- Node.js
- Express.js
- Database: SQLite OR MongoDB with Mongoose OR PostgreSQL with Sequelize

---

## Core Features

### Frontend
- **Dashboard** to view list of users.
- **Form** to create a new user.
- **User details page** to view single user information.
- **Edit and delete** users functionality.
- **Client-side form validation** (required fields, valid email, etc.).
- Clean and **responsive UI**.

### Backend
- **RESTful APIs** to:
  - Return all users.
  - Return a single user by ID.
  - Create a new user with fields:
    - Name
    - Email
    - Phone
    - Company
    - Address (street, city, zip, geo: lat & lng)
  - Update a user's details.
  - Delete a user.
- **Server-side validation** (required fields, email format).
- **Graceful error handling** (user not found, invalid data, etc.).
