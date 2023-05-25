const express = require("express");

const moviesController = require("../../controllers/movies-controller");

const schemas = require("../../schemas/movies-schemas");

const {validateBody} = require("../../decorators");

const router = express.Router();

router.get("/", (moviesController.getAllMovies));

router.get("/:id", moviesController.getMovieById);

router.post("/", validateBody(schemas.movieAddSchema), moviesController.addMovie);

router.put("/:id", validateBody(schemas.movieAddSchema), moviesController.updateMovieById)

router.delete("/:id", moviesController.deleteMovieById)

module.exports = router;