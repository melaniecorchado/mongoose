var express = require("express");
var mongoose = require("mongoose");
var story = require("./models/story.js");
var request = require("request");
var cheerio = require("cheerio");
mongoose.Promise = Promise;


var app = express();


app.get("/scrape", function(req, res) {
  request("http://www.echojs.com/", function(error, response, html) {
    var $ = cheerio.load(html);

      var result = {};

      result.title = $(this).children("a").text();
      result.link = $(this).children("a").attr("href");

      var entry = new story(result);

      entry.save(function(err, doc) {
        if (err) {
          console.log(err);
        }
        else {
          console.log(doc);
        }
      });

    });
  });
});


app.listen(3000, function() {
  console.log("App running on port 3000!");
});
