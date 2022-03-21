const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');

app.use(cors());

app.get('/', (req, res) => {
    fs.readFile(__dirname + '/' + 'users.json', 'utf8', (err, data) => {
        console.log(data)
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(data);
    })
});

app.get('/:hiveId', (req, res) => {
    fs.readFile(__dirname + '/' + 'users.json', 'utf8', (err, data) => {
        console.log(data)
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(req.body);
    })
});

const server = app.listen(process.env.PORT || 8081, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(host, port)
});
