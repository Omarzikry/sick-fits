require("dotenv").config({
  path: "variables.env"
});

const createServer = require("./createServer");

const db = require("./db");

const server = createServer();

//ToDo use express middleware to handle cookies (JWT)
//ToDo use express middleware to populate current user

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => {
    console.log(`Server is now running on http:/localhost:${deets.port}`);
  }
);
