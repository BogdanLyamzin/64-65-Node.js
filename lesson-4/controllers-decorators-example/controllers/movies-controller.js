const moviesService = require("../models/moviesService");

const { HttpError } = require("../helpers");

const { ctrlWrapper } = require("../decorators");

const getAllMovies = async (req, res) => {
    const result = await moviesService.getAllMovies();
    res.json(result);
}

const getMovieById = async (req, res) => {
    const { id } = req.params;
    const result = await moviesService.getMovieById(id);
    if (!result) {
        throw HttpError(404, `Movie with ${id} not found`);
    }
    res.json(result);
}

const addMovie = async (req, res) => {
    const result = await moviesService.addMovie(req.body);
    res.status(201).json(result)
}

const updateMovieById = async (req, res) => {
    const { id } = req.params;
    const result = await moviesService.updateMovieById(id, req.body);
    if (!result) {
        throw HttpError(404, `Movie with ${id} not found`);
    }

    res.json(result);
}

const deleteMovieById = async (req, res) => {
    const { id } = req.params;
    const result = await moviesService.deleteMovieById(id);
    if (!result) {
        throw HttpError(404, `Movie with ${id} not found`);
    }

    res.json({
        message: "Delete success"
    })
}

module.exports = {
    getAllMovies: ctrlWrapper(getAllMovies),
    getMovieById: ctrlWrapper(getMovieById),
    addMovie: ctrlWrapper(addMovie),
    updateMovieById: ctrlWrapper(updateMovieById),
    deleteMovieById: ctrlWrapper(deleteMovieById),
}