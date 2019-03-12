alert("asdf")
var fails = ["homework", "work", "winter", "snow", "walking", "football", "cheerleading", "parking", "driving", "running",
     "skating", "iceskating", "gymnastics"];

    function displayFailImg() {
    
        var fail = $(this).attr("data-name")
        var queryURL = "https://api.giphy.com//v1/gifs/search?q=" + fail + "&limit=10&api_key=KbfjUcGQ46v2IkPygFpVdZBB2jn2cqSo";
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);

            var gifDiv = $("<div class='gifInfo'></div>");
            
            var rating= response.data[i].rating;
            var ratingText = $("<p>").text("Rating: " + rating);
            gifDiv.append(ratingText);

            })
            

                //add still vs animate 
        }

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
    
    