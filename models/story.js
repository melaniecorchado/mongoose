var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var storySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

// Create the Article model with the ArticleSchema
var story = mongoose.model("story", ArticleSchema);

// Export the model
module.exports = Article;
