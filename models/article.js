var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  Comment: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }]
});

var article = mongoose.model("article", articleSchema);

//export model
module.exports = article;