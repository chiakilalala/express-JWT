const express = require('express');
const router = express.Router();
const PostController = require('../controller/posts');

const { isAuth } = require('../service/auth');
//�[�ݩҦ��H�ʺA
router.get('/posts',isAuth, PostController.getPosts);
//�ݭӤH�ʺA
router.get('/post/:id',isAuth, PostController.getOnePost);
//�i�K�ӤH�ʺA
router.post('/post',isAuth, PostController.creatPosts);
//�s�W�I�g
router.post('/:id/likes',isAuth, PostController.creatlikes);
//�����I�g
router.delete('/:id/likes',isAuth, PostController.deletelike);

module.exports = router;




