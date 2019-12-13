const express = require('express');
const request = require('request');

const path = require('path');

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.json());

app.get('/kyle-service/bundle.js', (req, res) => {
  request('http://34.213.221.210:3001/bundle.js', (err, response) => {
    res.send(response.body);
  });
});

app.get('/api/listings/:Listing_id', (req, res) => {
  request('http://34.213.221.210:3001/api/listings/' + req.params.Listing_id, (err, response) => {
    res.send(response.body);
  });
});

app.get('/patrick-service/bundle.js', (req, res) => {
  request('http://18.236.158.99:3002/bundle.js', (err, response) => {
    if (err) {
      console.log(err);
    }
    res.send(response.body);
  });
});

app.get('/listings/:id', (req, res) => {
  request('http://18.236.158.99:3002/listings/' + req.params.id, (err, response) => {
    if (err) {
      console.log(err);
    }
    res.send(response.body);
  });
});

app.get('/sayer-service/bundle.js', (req, res) => {
  request('http://18.221.25.146:3003/bundle.js', (err, response) => {
    if (err) {
      console.log(err);
    }
    res.send(response.body);
  });
});

app.get('/api/listing/:Listing_id/', (req, res) => {
  request('http://18.221.25.146:3003/api/listing/' + req.params.Listing_id, (err, response) => {
    if (err) {
      console.log(err);
    }
    res.send(response.body);
  });
});

app.get('/matt-service/bundle.js', (req, res) => {
  request('http://54.202.99.13:3004/bundle.js', (err, response) => {
    res.send(response.body);
  });
});

app.get('/api/houseprices/:listing_id/', (req, res) => {
  request('http://54.202.99.13:3004/api/houseprices/' + req.params.listing_id, (err, response) => {
    res.send(response.body);
  });
});

app.get('/inna-service/bundle.js', (req, res) => {
  request('http://35.164.99.110:3005/dist/bundle.js', (err, response) => {
    // console.log('response ', response.body);

    if (err) {
      console.log(err);
    }
    res.send(response.body);
  });
});

app.get('/api/photos/:id/', (req, res) => {
  request('http://35.164.99.110:3005/api/photos/' + req.params.id, (err, response) => {
    if (err) {
      console.log(err);
    }

    res.send(response.body);
  });
});

app.listen(PORT, () => {
  console.log('Server listening on port: ', PORT);
});