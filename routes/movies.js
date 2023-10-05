const router = require('express').Router();
const { getMovieList, createMovie, deleteMovie } = require('../controllers/movies');
const { validateMovieId, validateMovie } = require('../utils/validationApi');

router.post('/', validateMovie, createMovie);
router.delete('/:movieId', validateMovieId, deleteMovie);
router.get('/', getMovieList);

module.exports = router;
