const {program} = require("commander");

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

program
    .option("-a, --action <type>")
    .option("-i, --id <type>")
    .option("-t, --title <type>")
    .option("-d, --director <type>");

program.parse();

const options = program.opts();
invokeAction(options);
