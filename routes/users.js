
var express = require('express');
var router = express.Router();
const usersController = require('../controller/users');
const { isAuth, generateUrlJWT, generateSendJWT } = require('../service/auth');
const passport = require('passport');
// var session = require('express-session'); 


/*���U */
router.post('/sign_up', usersController.signUp);
/*�n�J */
router.post('/sign_in', usersController.signIn);
/*���o�Ҧ��ϥΪ� */
router.get('/allusers',isAuth,usersController.getUsers);
/*�ݭӤH��� */
router.get('/profile',isAuth,usersController.getUser);
/*��s�ӤH��� */
router.patch('/profile/:id',isAuth,usersController.editUser);
/*���]�K�X */
router.post('/updatePassword/:id',
isAuth,
usersController.updatePassword);  
//���o�Ҧ��I�g�K��
router.get('/getLikeList',isAuth, usersController.getLikeList);

//���o�ӤH�K��C��
router.get('/:id',isAuth, usersController.getPostList);

router.get('/google', passport.authenticate('google', {
  scope: [ 'email', 'profile' ],
}));

 

router.get('/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
  generateUrlJWT(req.user, res);
})
 


module.exports = router;