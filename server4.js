const express = require('express');
const path = require('path');
const app = express();
//show them the .env file (set it up in package.json node --watch --env-file=.env server or install dotnev)

const port = process.env.PORT || 8000
//mock the database data
let posts = [
    {
        id: 1,
        title: 'Post one'
    },
    {
        id: 2,
        title: 'Post two'
    },
    {
        id: 3,
        title: 'Post three'
    },
];

//get all posts
app.get('/api/posts', (req, res) => {
    res.json(posts);
});
//now show them testing with POSTMAN / insomnia

// get single posts :
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.filter((post) => post.id == id)
    res.json(post);
});



app.listen(port, () => console.log(`server is running on port ${port}`))
