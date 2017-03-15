// Access webhose.io API to retreive News headlines from the onion and push to fakeNewsArray
var Onion = {
  "async": true,
  "crossDomain": true,
  "url": "https://webhose.io/search?token=fc70c82d-7bd6-4bed-aafe-4d4e65c7e5db&format=json&q=&site=theonion.com&size=12",
  "dataType": "json",
  "method": "GET",
}
$.ajax(Onion).done(function (response) {
  // console.log(response);
  // console.log(response.posts[0].title);
  getTitles(response, "- The Onion -", fakeNewsArray);
  completedRequests++;
  processResults();
});
  // Create arrays for real news titles and fake news titles
  var fakeNewsArray = [];
  var realNewsArray = [];
 // Create a function which runs For Loop.  Remove suffix identifying news source.  Put edited title into appropriate array (real news or fake news)
function getTitles(response, removesuffix, outputarray) {
  for (var i = 0; i < response.posts.length; i++) {
      var title = response.posts[i].title;
      // console.log("before:", title);
      var suffixIndex = title.indexOf(removesuffix);
      if (suffixIndex > 0) {
        title = title.substring(0,suffixIndex);
      }
      if (title.length>0) {
        outputarray.push(title);
          console.log(outputarray);
        // console.log("after:", title);
      } else {
        // console.log("Rejected:", title);
      }
      
  }
};
// Access webhose.io API to retrieve New headlines from CNN and push to realNewsArray
var CNN = {
  "async": true,
  "crossDomain": true,
  "url": "https://webhose.io/search?token=fc70c82d-7bd6-4bed-aafe-4d4e65c7e5db&format=json&q=language:english&site=cnn.com&size=12",
  "dataType": "json",
  "method": "GET",
}
$.ajax(CNN).done(function (response) {
  // console.log(response);
  // console.log(response.posts[0].title);
  getTitles(response, "- CNN", realNewsArray);
  completedRequests++;
  processResults();
});
// Access webhose.io API to retrieve New headlines from TMZ and push to realNewsArray
var TMZ = {
  "async": true,
  "crossDomain": true,
  "url": "https://webhose.io/search?token=fc70c82d-7bd6-4bed-aafe-4d4e65c7e5db&format=json&q=&site=tmz.com&size=12",
  "dataType": "json",
  "method": "GET",
}
$.ajax(TMZ).done(function (response) {
  // console.log(response);
  // console.log(response.posts[0].thread.title);
  getTitles(response, "TMZ", realNewsArray);
  completedRequests++;
  processResults();
});
// Define number of Ajax calls and set variable form number of completed Ajax calls
var totalRequests = 3;
var completedRequests = 0;
// Create variable to keep track of correct and incorrect guesses
var correctGuess = 0;
var incorrectGuess = 0;
var questionNumber = 0;
var headlineIndex = undefined;
// Function to be certain all Ajax calls are completed prior to running the remainder of the code
function processResults () {
  if (completedRequests===totalRequests) {
    // Combine real and fake headlines into a single array
    var headlinesArray = fakeNewsArray.concat(realNewsArray);
    headlineIndex = Math.floor(Math.random() * headlinesArray.length);
    console.log(headlinesArray);
    var randomHeadline = headlinesArray[headlineIndex];
    console.log(randomHeadline);
    // Output random headline to HTML
    $("#quizquestions").html(randomHeadline);
    // Clear Quiz Output 
    $("#quizoutput").html("");
    // Record question number
    questionNumber++;
    console.log(questionNumber);
  }
    
  };
  // Enable on click event listeners
  // If REAL button is clicked
    $( "#real_button" ).click(function() {
      if (headlineIndex <= fakeNewsArray.length) {
        $("#quizoutput").html("No!  This is Fake");
        incorrectGuess++;
        console.log(incorrectGuess);
        $("#rightguess").html("Correct Guesses: " + correctGuess);
        $("#wrongguess").html("Wrong Guesses: " + incorrectGuess);
        setTimeout(function(){processResults()}, 3000)
      }
      else {
        $("#quizoutput").html("Yes!  This is TRUE")
        correctGuess++;
        console.log(correctGuess);
        $("#rightguess").html("Correct Guesses: " + correctGuess);
        $("#wrongguess").html("Wrong Guesses: " + incorrectGuess);
        setTimeout(function(){processResults()}, 3000)
      };
    });
    // If FAKE button is clicked
    $( "#fake_button" ).click(function() {
    if (headlineIndex <= fakeNewsArray.length) {
      $("#quizoutput").html("You're right!  This Is Fake");
      correctGuess++;
      $("#rightguess").html("Correct Guesses: " + correctGuess);
      $("#wrongguess").html("Wrong Guesses: " + incorrectGuess);
      setTimeout(function(){processResults()}, 3000)
    } 
      else {
      $("#quizoutput").html("Sorry!  This is True");
      incorrectGuess++;
      $("#rightguess").html("Correct Guesses: " + correctGuess);
      $("#wrongguess").html("Wrong Guesses: " + incorrectGuess);
      setTimeout(function(){processResults()}, 3000)
    };
    });
    // After 10 questions, end the quiz
    if (questionNumber = 10) {
        console.log("Game Over")
    } else
    {
        console.log("Continue")
    };