import express from 'express';

const server = express();

server.get('/', (req, res) => {
  res.send(`มาละจู้`).end();
});

server.listen(8080, () => {
  console.log(`พร้อมละจู้`);
});
