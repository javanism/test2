const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/upload', require('./routes/uploadRouter'));

const server = app.listen('8081', () => {
    console.log('8081 server ready..^^***');
});

const a = require('./socket');
a(server);

const b = require('./sse');
b(server);

