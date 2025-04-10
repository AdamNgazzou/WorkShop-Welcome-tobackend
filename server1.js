const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the main page </h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>about</h1>');
});
app.listen(8000, () => console.log(`server is running on port 8000`))
