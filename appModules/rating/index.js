const { updateRating, createRating } = require("./calculations");
const config = require("./config");
const makeRatingFile = require("./rating-file");

module.exports = {
  makeRatingFile,
  config,
  updateRating,
  createRating,
};
