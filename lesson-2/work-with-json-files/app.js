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

// invokeAction({ action: "list" });
// invokeAction({action: "getMovieById", id: "u9kgwNWGi3uUUwh0b8V48"});
// invokeAction({action: "addMovie", title: "Avatar: way of water", director: "James Cameron"})
// invokeAction({action: "updateMovieById", id: "c0m1gLAIaJHtqhy3WEyfa", title: "Avatar: Way of water", director: "James Cameron"})
// invokeAction({action: "deleteMovieById", id: "c0m1gLAIaJHtqhy3WEyfa"})