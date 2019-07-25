animals = ["dog", "cat", "bird", "monkey", "fish", "bear",]

function renderButtons() {
  $("#buttons-view").empty();
  for (var i = 0; i < animals.length; i++) {
    var a = $("<button>");
    a.addClass("animals btn btn-dark");
    a.addClass("m-2");
    a.attr("data-name", animals[i]);
    a.text(animals[i]);
    $("#buttons-view").append(a);
  }
}

function displayGifs() {
  var animaltype = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animaltype + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      Response=response.data;
      redndergifs();
    });
}

function redndergifs() {
  for (var i = 0; i < Response.length; i++) {
    var Div = $("<div>");
    var rating = Response[i].rating;
    var p = $("<p>").text("Rating: " + rating);
    p.css("color","white");
    var animalImage = $("<img>");
    animalImage.attr("src", Response[i].images.fixed_height_still.url);
    animalImage.attr("data-still", Response[i].images.fixed_height_still.url);
    animalImage.attr("data-animate", Response[i].images.fixed_height.url);
    animalImage.attr("data-state", "still");
    animalImage.attr("class", "still");
    Div.addClass("gif col-4");
    Div.prepend(p);
    Div.prepend(animalImage);
    $("#gif-display").prepend(Div);
  }
}

renderButtons();

$("#add-animal").on("click", function (event) {
  event.preventDefault();
  var animal = $("#animal-input").val().trim();
  animals.push(animal);
  $("#animal-input").val("");
  renderButtons();
});

$(document).on("click", ".still", function (event) {
  var state = $(this).attr("data-state");
  if (state == "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});

$(document).on("click", ".animals", displayGifs);