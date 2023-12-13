# Study_Dashboard API

## Overview
Welcome to the NodeJS Todo and Notes API with User Authentication. This API serves as the backend for managing user authentication, todo tasks, and notes. It provides a set of endpoints for the CRUD functions of the todos and notes while ensuring secure user authentication.

## Features

### User Authentication
- **Register:** Users can create accounts by providing a unique username and password.
- **Login:** Registered users can securely log in using their credentials.

### Todo Management
- **Create:** Authenticated users can create new todo tasks with details such as title, description, and due date.
- **Read:** Users can retrieve their todo tasks, including filtering by status and due date.
- **Update:** Users can modify the details of existing todo tasks.
- **Delete:** Authenticated users can delete their todo tasks.

### Notes Management
- **Create:** Users can create notes with titles and content.
- **Read:** Retrieve all notes associated with the authenticated user.
- **Update:** Modify the details of existing notes.
- **Delete:** Delete notes that belong to the authenticated user.

## Data Model
The API uses a MongoDB database for storing user information, todo tasks, and notes. The data model includes collections for users, todos, and notes, establishing relationships between them for seamless retrieval and storage.

## Technologies Used
- **Node.js:** The backend is built using Node.js, providing a scalable and non-blocking architecture.
- **Express:** Express.js is used to handle routes and middleware, making API development more straightforward.
- **MongoDB:** MongoDB is employed as the database to store user information, todos, and notes.
- **Mongoose:** Mongoose is used as an ODM (Object Document Mapper) for MongoDB, providing a convenient way to interact with the database.
- **JWT (JSON Web Tokens):** JWT is used for secure user authentication, generating and validating tokens.

## Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB installed or a MongoDB Atlas account

### Installation
1. Clone the repository: `git clone https://github.com/alesmnlnsan/Project_api`
2. Navigate to the project directory.
3. Install dependencies. Run `npm install` in the terminal.
4. Set up a `.env` file with the following variables:
   - `PORT`: Port for the server to run on
   - `MONGODB_URI`: MongoDB connection URI
   - `JWT_SECRET`: Secret key for JWT token generation

### Running the API
- Run the API in development mode: `npm start`
- The API will be accessible at [http://localhost:your-port](http://localhost:your-port)

For more detailed information, refer to the [API documentation](#).

## Learn More
Feel free to explore and customize the API according to your needs. If you have any questions or feedback, don't hesitate to reach out. Happy coding!
