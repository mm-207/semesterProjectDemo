import express from 'express'
import User from './modules/user.mjs';

const server = express();



const port = (process.env.PORT || 8080);

server.set('port', port);
server.use(express.static('public'));

server.get("/", getRoot);

function getRoot(req, res, next) {
    res.status(200).send(JSON.stringify({ msg: "These are nto the droids...." })).end();
}



server.listen(server.get('port'), function () {
    console.log('server running', server.get('port'));
});