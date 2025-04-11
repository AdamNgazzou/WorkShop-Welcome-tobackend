const express = require('express');
const { getPosts, getPost, PostPost, ModifyPost, DeletePost } = require('../controllers/postsController');
const router = express.Router()


router.get('/', getPosts)
router.get('/:id', getPost)

//server7
router.post('/', PostPost)
router.put('/:id', ModifyPost)
router.delete('/:id', DeletePost)


module.exports = router;