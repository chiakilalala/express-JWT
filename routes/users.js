
var express = require('express');
var router = express.Router();
const usersController = require('../controller/users');
const { isAuth } = require('../service/auth');

router.post('/sign_in', usersController.signIn);
router.post('/sign_up', usersController.signUp);
/*取得所有使用者 */
router.get('/allusers',isAuth,usersController.getUsers);
/*看個人資料 */
router.get('/profile',isAuth,usersController.getUser);
/*更新個人資料 */
router.patch('/profile/:id',isAuth,usersController.editUser);
router.post('/updatePassword/:id',
isAuth,
usersController.updatePassword);
  
module.exports = router;