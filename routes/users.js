const router = require('express').Router();
const { getUser, updateUser } = require('../controllers/users');
const { validateUserInfo } = require('../utils/validationApi');

router.get('/me', getUser);
router.patch('/me', validateUserInfo, updateUser);

module.exports = router;
