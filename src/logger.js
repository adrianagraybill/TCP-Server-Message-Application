'use strict';

const net = require('net');
const client = new net.Socket();

client.connect(3001, 'localhost', () => console.log('Connected'));

client.on('data', function(data) {
  let payload = JSON.parse(data);
  console.log(payload);
});

client.on('save', function(data) {
  let payload = JSON.parse(data);
  console.log('Saved', `${payload}`);
})

client.on('close', function() {
  console.log('Closed');
});