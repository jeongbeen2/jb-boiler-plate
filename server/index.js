const https = require('https');
const fs = require('fs');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json({ strict: false }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('T.T');
});

app.post('/login');

https
  .createServer(
    {
      key: fs.readFileSync(__dirname + '/key.pem', 'utf-8'),
      cert: fs.readFileSync(__dirname + '/cert.pem', 'utf-8'),
    },
    // ? use node https modules
    // function (req, res) {
    //   res.write('Congrats! You made https server now :)');
    //   res.end();

    // * express를 사용할 경우 callback 함수를 Express middleware로 변경해주면 된다.
    // ? use express
    app.use('/', (req, res) => {
      res.send('Congrats! You made https server now :)');
    })
  )
  .listen(5000);
