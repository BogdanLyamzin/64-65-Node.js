const express = require("express");

const moviesControllers = require("../../controllers/movies-controllers");

const {schemas} = require("../../models/movie");

const {validateBody} = require("../../utils");

const {isValidId, authenticate, upload} = require("../../middlewares");

const router = express.Router();

router.use(authenticate);

router.get("/", moviesControllers.getAllMovies);

router.get("/:id", isValidId, moviesControllers.getMovieById);

// upload.fields([{name: "poster", maxCount: 1}, {name: "second-poster", maxCount: 2}])
// upload.array("poster", 8);
router.post("/", upload.single("poster"), validateBody(schemas.movieAddSchema), moviesControllers.addMovie);

router.put("/:id", isValidId, validateBody(schemas.movieAddSchema), moviesControllers.updateMovieById);

router.patch("/:id/favorite", isValidId, validateBody(schemas.updateFavoriteMovieSchema), moviesControllers.updateMovieFavorite)

router.delete("/:id", isValidId, moviesControllers.deleteMovieById);

module.exports = router;