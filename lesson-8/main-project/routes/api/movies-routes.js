const express = require("express");

const moviesControllers = require("../../controllers/movies-controllers");

const {schemas} = require("../../models/movie");

const {validateBody} = require("../../utils");

const {isValidId, authenticate} = require("../../middlewares");

const router = express.Router();

router.use(authenticate);

router.get("/", moviesControllers.getAllMovies);

router.get("/:id", isValidId, moviesControllers.getMovieById);

router.post("/", validateBody(schemas.movieAddSchema), moviesControllers.addMovie);

router.put("/:id", isValidId, validateBody(schemas.movieAddSchema), moviesControllers.updateMovieById);

router.patch("/:id/favorite", isValidId, validateBody(schemas.updateFavoriteMovieSchema), moviesControllers.updateMovieFavorite)

router.delete("/:id", isValidId, moviesControllers.deleteMovieById);

module.exports = router;