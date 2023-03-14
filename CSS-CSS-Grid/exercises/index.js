const connect  = require('connect');
const serveStatic = require('serve-static');
const livereload = require('livereload');

const server = connect();

server.use(serveStatic(__dirname + '/src'));

server.listen(3000);

const lrserver = livereload.createServer();
lrserver.watch(__dirname + "/src");

console.log('Listening on port 3000');