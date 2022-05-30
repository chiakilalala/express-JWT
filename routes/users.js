
var express = require('express');
var router = express.Router();
const usersController = require('../controller/users');
const { isAuth } = require('../service/auth');

router.post('/sign_in', usersController.signIn);
router.post('/sign_up', usersController.signUp);
/*���o�Ҧ��ϥΪ� */
router.get('/allusers',isAuth,usersController.getUsers);
/*�ݭӤH��� */
router.get('/profile',isAuth,usersController.getUser);
/*��s�ӤH��� */
router.patch('/profile/:id',isAuth,usersController.editUser);
router.post('/updatePassword/:id',
isAuth,
usersController.updatePassword);
  
module.exports = router;