const express = require('express');
const path = require('path');
const app = express();
//show them the .env file (set it up in package.json node --watch --env-file=.env server or install dotnev)
const postsRoutes = require('./routes/postsRoutes')
const port = process.env.PORT || 8000
//mock the database data


app.use("/api/posts", postsRoutes)

// get single posts : **************************CHANGE CHANGE  Error handeling******************************** 




app.listen(port, () => console.log(`server is running on port ${port}`))
