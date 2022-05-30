const express = require('express');
const router = express.Router();
const PostController = require('../controller/posts');

const { isAuth } = require('../service/auth');
//觀看所有人動態
router.get('/posts',isAuth, PostController.getPosts);
//看個人動態
router.get('/post/:id',isAuth, PostController.getOnePost);
//張貼個人動態
router.post('/post/',isAuth, PostController.creatPosts);





module.exports = router;




