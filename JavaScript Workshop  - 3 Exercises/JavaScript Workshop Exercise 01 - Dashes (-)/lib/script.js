console.log(`Hello There`)


console.log(jQuery.fn.jquery);


$(document).ready(function() {




    let button1 = $("#button1");

    let firstNumber = $("#num1");

    let header2 = $("#im-h2");







    button1.click(function() {

        console.log(firstNumber.val())

        let number = firstNumber.val();
        let string = number.toString();
        let result = [string[0]];

        for (let i = 1; i < string.length; i++) {
            if ((string[i - 1] % 2 === 0) && (string[i] % 2 === 0)) {
                result.push('-', string[i]);
            } else {
                result.push(string[i]);
            }
        }
        header2.html(`The result is: "${result.join('')}"`);
        firstNumber.val(" ")


    })





})