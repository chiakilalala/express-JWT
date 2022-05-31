const express = require('express');
const router = express.Router();
const PostController = require('../controller/posts');

const { isAuth } = require('../service/auth');
//觀看所有人動態
router.get('/posts',isAuth, PostController.getPosts);
//看個人動態
router.get('/post/:id',isAuth, PostController.getOnePost);
//張貼個人動態
router.post('/post',isAuth, PostController.creatPosts);
//新增點讚
router.post('/:id/likes',isAuth, PostController.creatlikes);
//取消點讚
router.delete('/:id/likes',isAuth, PostController.deletelike);

module.exports = router;




