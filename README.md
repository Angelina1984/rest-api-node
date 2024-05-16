**Rest-API-Node**

Welcome to Rest-API-Node! This project is a simple RESTful API built with **Node.js** and **Express**, utilizing **MongoDB** as the database with **Mongoose** for object modeling.

### Project Structure

- **app.js**: The main entry point of the application where Express middleware is configured and routes are defined.
- **db.js**: Module responsible for connecting to the MongoDB database using Mongoose.
- **routes/index.js**: Defines the routes for the root endpoint.
- **routes/users.js**: Defines routes for performing CRUD operations on user resources.
- **model/User.js**: Contains the Mongoose schema definition for the User model.

### Getting Started

To get started with Rest-API-Node, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install`.
4. Make sure you have MongoDB installed and running locally on the default port (27017).
5. Start the server by running `npm start`.

### Setting Up MongoDB on Windows

If you're using a Windows machine, follow these steps to set up MongoDB:

1. Download and install MongoDB from the official website: [MongoDB Downloads](https://www.mongodb.com/try/download/community)
2. Install MongoDB under the folder `C:\Program Files\MongoDB\Server\7.0`.
3. Open Command Prompt as an administrator.
4. If MongoDB is running, stop it by running the command: `net stop MongoDB`.
5. If you encounter any issues, ensure MongoDB is not running and delete the `mongod.lock` file located under `C:\Program Files\MongoDB\Server\7.0\data` folder.
6. Start MongoDB with the following command: `mongod --dbpath "C:\Program Files\MongoDB\Server\7.0\data"`.
7. Find MongoDB Compass on your machine and run it.
8. Under databases, add new database: users, collection: users

### Available Routes

- **GET /**: Retrieve sample index.html file.
- **GET /users**: Retrieve all users from the database.
- **GET /users/:id**: Retrieve a specific user by ID.
- **POST /users**: Create a new user.
- **PUT /users/:id**: Update an existing user by ID.
- **DELETE /users/:id**: Delete a user by ID.

### Dependencies

This project uses the following dependencies:

- **express**: Web application framework for Node.js.
- **mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **morgan**: HTTP request logger middleware for Node.js.
- **cookie-parser**: Parse Cookie header and populate `req.cookies` with an object keyed by the cookie names.
- **debug**: Small debugging utility.

### Additional Information

- This project utilizes the ES6 syntax, async/await, and modern JavaScript features.
- Ensure that MongoDB is running locally on port 27017 before starting the server.
- Feel free to explore and modify the code to suit your needs!

