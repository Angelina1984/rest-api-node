/**
 * app.js
 *
 * This file is the main entry point of the application. It sets up the Express server and
 * configures middleware, routes, and database connection.
 *
 * Middleware:
 * - logger: HTTP request logger middleware for Node.js.
 * - json: Parses incoming JSON requests.
 * - urlencoded: Parses incoming URL-encoded form data.
 * - cookieParser: Parses Cookie header and populates `req.cookies` with an object keyed by the cookie names.
 * - static: Serves static files from the 'public' directory.
 *
 * Routes:
 * - '/' (indexRouter): Defines routes for the root endpoint.
 * - '/users' (usersRouter): Defines routes for user-related endpoints.
 *
 * Database Connection:
 * - The `connect()` function from './db' module is called to establish a connection to MongoDB.
 *
 * @author Ikonija Lopez
 * @version 1.0
 */
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { connect } = require('./db');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

connect();

module.exports = app;
