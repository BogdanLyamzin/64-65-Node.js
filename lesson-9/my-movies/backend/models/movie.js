const {Schema, model} = require("mongoose");
const Joi = require("joi");

const {handleMongooseError} = require("../utils");

const genreList = ["fantastic", "love story"];
const releaseDateRegexp = /^\d{4}$/;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    genre: {
        type: String,
        enum: genreList,
        required: true,
    },
    releaseDate: {
        type: String,
        match: releaseDateRegexp,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    }
}, {versionKey: false, timestamps: true});

movieSchema.post("save", handleMongooseError);

const movieAddSchema = Joi.object({
    title: Joi.string().required(),
    director: Joi.string().required().messages({
        "any.required": `"director" must be exist`,
        "string.base": `"director" must be text`,
    }),
    favorite: Joi.boolean(),
    genre: Joi.string().valid(...genreList).required(),
    releaseDate: Joi.string().pattern(releaseDateRegexp).required(),
});

const updateFavoriteMovieSchema = Joi.object({
    favorite: Joi.boolean().required()
})

const schemas = {
    movieAddSchema,
    updateFavoriteMovieSchema,
}

const Movie = model("movie", movieSchema);

module.exports = {
    Movie,
    schemas,
}