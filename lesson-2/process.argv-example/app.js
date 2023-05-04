const movieService = require("./movies");

const invokeAction = async ({ action, id, title, director }) => {
    switch (action) {
        case "list":
            const allMovies = await movieService.getAllMovies();
            return console.log(allMovies);
        case "getMovieById":
            const oneMovie = await movieService.getMovieById(id);
            return console.log(oneMovie);
        case "addMovie":
            const newMovie = await movieService.addMovie({title, director});
            return console.log(newMovie);
        case "updateMovieById":
            const updateMovie = await movieService.updateMovieById(id, {title, director});
            return console.log(updateMovie);
        case "deleteMovieById":
            const deleteMovie = await movieService.deleteMovieById(id);
            return console.log(deleteMovie)
        default:
            console.log("Unknown action");            
    }
}

const actionIndex = process.argv.indexOf("--action");

if(actionIndex !== -1) {
    const action = process.argv[actionIndex + 1];
    invokeAction({action})
}