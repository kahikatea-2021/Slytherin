const express = require("express");
const hbs = require("express-handlebars");

const translationsRoutes = require("./translations");

const server = express();

// Middleware

server.engine("hbs", hbs({ extname: "hbs" }));
server.set("view engine", "hbs");
server.use(express.urlencoded({ extended: true }));

// Routes

server.use("/", translationsRoutes);

module.exports = server;
