import express from 'express' // Express is installed using npm
import USER_API from './routes/usersRoute.mjs'; // This is where we have defined the API for working with users.

// Creating an instance of the server
const server = express();
// Selecting a port for the server to use.
const port = (process.env.PORT || 8080);
server.set('port', port);

// Defining a folder that will contain static files.
server.use(express.static('public'));

// Telling the server to use the USER_API 
server.use("/user", USER_API);

// A get request handler example)
server.get("/", (req, res, next) => {

    res.status(200).send(JSON.stringify({ msg: "These are not the droids...." })).end();
});

// Start the server 
server.listen(server.get('port'), function () {
    console.log('server running', server.get('port'));
});
