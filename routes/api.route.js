const { createComment, getComments } = require('../controllers/commentController');
const { createPost, getPosts } = require('../controllers/postController');
const { createUser, updateUser, getUsers } = require('../controllers/userController');

const router = require('express').Router();

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

//User routes
router.post('/createUser', createUser);
router.put('/updateUser/:id', updateUser);
router.get('/getUsers', getUsers);
//Posts Routes
router.post('/createPost', createPost);
router.get('/getPosts', getPosts);
//Comments Routes
router.post('/createComment', createComment);
router.get('/getComments', getComments);


module.exports = router;
