console.log('Are we live?!?');



$(document).ready(function() {

    let button = $("#getData");


    button.click(function() {

        const urlToGetData = "https://swapi.dev/api/people/";

        $.ajax({
                url: urlToGetData,
                success: function(result) {
                    // the result is always JS object; it is automatically converted!!!
                    console.log(result);
                },
                error: function() {
                    console.error('Error occured!');
                }
            })
            .done(function(result) {
                for (let user of result.results) {
                    $("#userList").append(`<li>Name: ${user.name} - Height: ${user.height} Mass:${user.mass} </li>`);
                }
            });
    })

});