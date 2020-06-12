const express = require("express");
const helmet = require("helmet");

const server = express();

server.get("/", (req, res) => {
 res.send(`<h1>Node API Sprint!</h1>`);
});

function logger(req, res, next) {
 console.log(
  `Logger: [${new Date().toISOString()}] ${req.method} to ${req.originalUrl}`
 );
 next();
}

//Middleware
server.use(helmet());
server.use(express.json());
server.use(logger);

//Routers
const projectRouter = require("./router/projectRouter");
server.use("/api/projects", projectRouter);

const actionRouter = require("./router/actionRouter");
server.use("/api/actions", actionRouter);

module.exports = server;
