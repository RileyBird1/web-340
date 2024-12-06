const http = require('http');
const url = require('url');

// TODO: Implement your server here
const characters = { }
let id = 0;
const server = http.createServer((req, res) => {
  console.log(req.url);
  // TODO: Implement your routes here
  var queryObject = url.parse(req.url,true).query;
  console.log(queryObject);
  if (req.method == "POST") {
    if (req.url.startsWith("/character")) {
      console.log (req.url)
      const characterClass = queryObject.class;
      const characterGender = queryObject.gender;
      const characterFact = queryObject.fact;
      id++;
      characters[id] = {characterClass, characterGender, characterFact};
      res.writeHead(201);
      res.end('Character created successfully.');
    } else if (req.url.startsWith("/confirm") && req.method === 'POST') {
      console.log("in confirm block");
      const id = queryObject.id;
      if (id in characters) {
        res.writeHead(200);
        res.end('Character confirmed.');
      } else {
        res.writeHead(404);
        res.end('Character not found.');
      }
    }
  }
  if (req.method == "GET") {
    if (req.url.startsWith("/character")) {
      const id = queryObject.id;
      const character = characters[id];
      
      if (character) {
        res.writeHead(200);
        res.end('Character is a ' + character.characterGender + ' ' + character.characterClass + ' and one fact about them is ' + character.characterFact + '.');
      } else {
        res.writeHead(404);
        res.end('Character not found.')
      }
    }
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = server;