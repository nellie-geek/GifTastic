var fails = ["homework", "work", "winter", "snow", "walking", "football", "cheerleading", "parking", "driving", "running",
     "skating", "iceskating", "gymnastics"];

    function displayFailImg() {
    
        var fail = $(this).attr("data-name")
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + fail + "&limit=10&api_key=KbfjUcGQ46v2IkPygFpVdZBB2jn2cqSo";
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            for (var i = 0; i < fails.length; i++) {
            var gifDiv = $("<div class='gifInfo'></div>");
            
            var rating = response.data[i].rating;
            var ratingText = $("<p>").text("Rating: " + rating);
            gifDiv.append(ratingText);

            var stillURL = response.data[i].images.fixed_height_still.url;
            var animateURL = response.data[i].images.fixed_height.url;
            var gifImage = $("<img>");
        
            gifImage.attr("src", stillURL);
            gifImage.attr("data-still", stillURL);
            gifImage.attr("data-animate", animateURL);
            gifImage.attr("data-state", "still");
            gifImage.addClass("gif");

            $("#gif-view").prepend(gifDiv, gifImage); 
        }
        });    
    };

        $("#gif-view").on("click", ".gif", function (){
            var state = $(this).attr("data-state");
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
              } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
              }
        });

    function renderButtons() {
        $("#button-view").empty();
            console.log("hi");
        for (var i = 0; i < fails.length; i++) {
            console.log("hi");
            var a = $("<button>");
            a.addClass("fail");
            a.attr("data-name", fails[i]);
            a.text(fails[i]);
            $("#button-view").append(a);
        }
    };

    $("#add-fail").on("click", function(event) {
        event.preventDefault();
        var fail = $("#fail-input").val().trim();
        fails.push(fail);
        renderButtons();
    });

    $("#button-view").on("click", ".fail", displayFailImg);
    renderButtons();
    
    