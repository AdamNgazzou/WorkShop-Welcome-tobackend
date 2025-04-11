
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
exports.getPosts = async (req, res) => {
    const limit = parseInt(req.query.limit)
    if (!isNaN(limit) && limit > 0) {
        return res.json(posts.slice(0, limit));
    }
    res.json(posts);
}

exports.getPost = async (req, res) => {
    //localhost:8000/api/posts/1
    const { id } = req.params;
    try {
        //check id
        if (isNaN(id) || id < 0) {
            return res.status(400).json({ message: "invalid ID" });
        }

        const post = posts.filter((post) => post.id == id)
        //check if not found
        if (post[0] == null) {
            return res.status(404).json({ message: "post not found" })
        }
        //finally if no errors send the response
        res.json(post);

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "server error" })
    }

};