animals=["dog","cat","bird","monkey","fish","bear",]






function renderButtons() {

  // Deleting the movies prior to adding new movies
  // (this is necessary otherwise we will have repeat buttons)
  $("#buttons-view").empty();

  // Looping through the array of movies
  for (var i = 0; i < animals.length; i++) {

    // Then dynamicaly generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class
    a.addClass("animals");
    // Added a data-attribute
    a.attr("data-name", animals[i]);
    // Provided the initial button text
    a.text(animals[i]);
    // Added the button to the HTML
    $("#buttons-view").append(a);
  }
}
renderButtons();
// This function handles events where one button is clicked
$("#add-animal").on("click", function(event) {
  event.preventDefault();

  // This line grabs the input from the textbox
  var animal = $("#animal-input").val().trim();

  // The movie from the textbox is then added to our array
  animals.push(animal);

  // Calling renderButtons which handles the processing of our movie array
  renderButtons();
});