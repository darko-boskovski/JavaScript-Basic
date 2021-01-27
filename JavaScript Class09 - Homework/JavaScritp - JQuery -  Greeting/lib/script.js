console.log(`Hello There`)

console.log(jQuery.fn.jquery);


$(document).ready(function() {


    let button = $("button").first();
    let userInput = $("input").first();
    let header = $("h1:first-child");
    console.log(header)


    button.click(function() {

        header.text(`Hello there ${userInput.val()}!`);
        event.preventDefault();

    })

});