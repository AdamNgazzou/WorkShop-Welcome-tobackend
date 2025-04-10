const express = require('express');
const path = require('path');
const app = express();

//setup static folder 
//middleware(its a function that runs between the incomming request and the outgoing response)
app.use(express.static(path.join(__dirname, 'public'))) //take in the location where yo want your static folder (public)
//localhost:8000/about.html  (.html is important here)

app.listen(8000, () => console.log(`server is running on port 8000`))
