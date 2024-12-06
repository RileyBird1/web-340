const http = require('http');
const server = require('../src/server');

describe("server", () => {
    afterAll(() => {
    server.close();
});

// TODO: Implement your tests here
  test('responds to /character POST request with query parameter', done => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/character?class=mage&gender=male&fact=turnsintoturkey',
      method: 'POST'
    };
    const req = http.request(options, res => {
      let data = '';
      res.on('data', chunk => {
        data += chunk;
      });
      res.on('end', () => {
      expect(res.statusCode).toBe(201);
      expect(data).toBe('Character created successfully.');
      done();
    });
    });
    req.end();
  });

  test('responds to /confirm POST request with 404', done => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/confirm?id=100',
      method: 'POST'
    };
    const req = http.request(options, res => {
      let data = '';
      res.on('data', chunk => {
        data += chunk;
      });
      res.on('end', () => {
      expect(res.statusCode).toBe(404);
      expect(data).toBe('Character not found.');
      done();
    });
    });
    req.end();
  });

  test('responds to /confirm POST request with 200', done => {
    const postOptions = {
        hostname: 'localhost',
        port: 3000,
        path: '/character?class=mage&gender=male&fact=turnsintoturkey',
        method: 'POST'
      };
      const postReq = http.request(postOptions, res => {
        let data = '';
        res.on('data', chunk => {
          data += chunk;
        });
        res.on('end', () => {
        expect(res.statusCode).toBe(201);
        expect(data).toBe('Character created successfully.');
      });
      });
      postReq.end();
    
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/confirm?id=1',
      method: 'POST'
    };
    const req = http.request(options, res => {
      let data = '';
      res.on('data', chunk => {
        data += chunk;
      });
      res.on('end', () => {
      expect(res.statusCode).toBe(200);
      expect(data).toBe('Character confirmed.');
      done();
    });
    });
    req.end();
  });

  test('responds to /confirm POST request with 200', done => {
    const postOptions = {
        hostname: 'localhost',
        port: 3000,
        path: '/character?class=mage&gender=male&fact=turnsintoturkey',
        method: 'POST'
      };
      const postReq = http.request(postOptions, res => {
        let data = '';
        res.on('data', chunk => {
          data += chunk;
        });
        res.on('end', () => {
        expect(res.statusCode).toBe(201);
        expect(data).toBe('Character created successfully.');
      });
      });
      postReq.end();
    
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/character?id=1',
      method: 'GET'
    };
    const req = http.request(options, res => {
      let data = '';
      res.on('data', chunk => {
        data += chunk;
      });
      res.on('end', () => {
      expect(res.statusCode).toBe(200);
      expect(data).toBe('Character is a ' + 'male' + ' ' + 'mage' + ' and one fact about them is ' + 'turnsintoturkey.');
      done();
    });
    });
    req.end();
  });

  test('responds to /character GET request with 404', done => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/character?id=100',
      method: 'GET'
    };
    const req = http.request(options, res => {
      let data = '';
      res.on('data', chunk => {
        data += chunk;
      });
      res.on('end', () => {
      expect(res.statusCode).toBe(404);
      expect(data).toBe('Character not found.');
      done();
    });
    });
    req.end();
  });
});