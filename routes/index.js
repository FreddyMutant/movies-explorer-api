const router = require('express').Router();
const { login, createUser } = require('../controllers/users');
const { auth } = require('../middlewares/auth');
const { validateLogin, validateUser } = require('../utils/validationApi');
const NotFoundError = require('../utils/errors/NotFound');

router.post('/signin', validateLogin, login);
router.post('/signup', validateUser, createUser);

router.use(auth);

router.use('/users', require('./users'));
router.use('/movies', require('./movies'));

router.use('*', (req, res, next) => next(new NotFoundError()));

module.exports = router;
