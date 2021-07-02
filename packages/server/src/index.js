const Server = require('boardgame.io/server').Server;

const server = Server({
    games: [],
});

server.run(8000);
