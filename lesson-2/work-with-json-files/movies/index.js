const fs = require("fs/promises");
const path = require("path");
const {nanoid} = require("nanoid");

const moviesPath = path.join(__dirname, "movies.json");

// const moviesPath = path.resolve("movies", "movies.json");
// console.log(moviesPath);

const updateMovies = async (movies) => await fs.writeFile(moviesPath, JSON.stringify(movies, null, 2));

const getAllMovies = async()=> {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
}

const getMovieById = async (id) => {
    const movies = await getAllMovies();
    const result = movies.find(item => item.id === id);
    return result || null;
}
 
const addMovie = async(data)=> {
    const movies = await getAllMovies();
    const newMovie = {
        id: nanoid(),
        ...data,
    };
    movies.push(newMovie);
    await updateMovies(movies);
    return newMovie;
}

const updateMovieById = async (id, data) => {
    const movies = await getAllMovies();
    const index = movies.findIndex(item => item.id === id);
    if(index === -1){
        return null;
    }
    movies[index] = {id, ...data};
    await updateMovies(movies);
    return movies[index];
}

const deleteMovieById = async (id) => {
    const movies = await getAllMovies();
    const index = movies.findIndex(item => item.id === id);
    if(index === -1){
        return null;
    }
    const [result] = movies.splice(index, 1);
    await updateMovies(movies);
    return result;
}

module.exports = {
    getAllMovies,
    getMovieById,
    addMovie,
    updateMovieById,
    deleteMovieById,
}