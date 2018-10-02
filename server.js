// Work on creating a for loop for the questions
// var myQuestionHeader = ["Question 1","Question 2", "Question 3", "Question 4", "Question 5", "Question 6", "Question 7","Question 8", "Question 9", "Question 10"];
// var myQuestions = ["Your mind is always buzzing with unexplored ideas and plans.", "Generally speaking, you rely more on your experience than your imagination.", "You find it easy to stay relaxed and focused even when there is some pressure.", "You rarely do something just out of sheer curiosity.", "People can rarely upset you.", "It is often difficult for you to relate to other people’s feelings.", "In a discussion, truth should be more important than people’s sensitivities.", "You rarely get carried away by fantasies and ideas.", "You think that everyone’s views should be respected regardless of whether they are supported by facts or not.", "You feel more energetic after spending time with a group of people."];
// for (var i = 0; i < myQuestions.length; i++) {
//     $("<div>").append(myQuestionHeader[i]);
//     $("<div>").append(myQuestions[i]);
//     $("<div>").append("<input type='text'>");
//     $("<div>").append("<h1>Please work</h1>");
//     console.log("Is this working also?")
// }

// console.log("Is this working?")


// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var path = require("path");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// Require imports the exported functions in the external files. 
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
