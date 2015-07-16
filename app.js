var jsonServer = require('json-server');

// Returns an Express server
var server = jsonServer.create();

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults);

// Returns an Express router
var router = jsonServer.router('db.json');
server.use(router);

console.log("Node app is running at localhost:" + app.get('port'));

server.listen(process.env.PORT || 5000);
