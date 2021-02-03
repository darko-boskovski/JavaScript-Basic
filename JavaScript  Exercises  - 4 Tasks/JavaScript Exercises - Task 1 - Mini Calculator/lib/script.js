console.log(`Hello There`)


console.log(jQuery.fn.jquery);


$(document).ready(function() {


    let button1 = $("#button1");
    let button2 = $("#button2");
    let button3 = $("#button3");
    let button4 = $("#button4");
    let button5 = $("#button5");

    let = firstNumber = $("#num1");
    let = secondNumber = $("#num2");

    let result = $("#result");




    button1.click(function() {

        result.text(`The result is: ${parseInt(firstNumber.val()) + parseInt(secondNumber.val())}`);

        firstNumber.val(" ");
        secondNumber.val(" ");

    })

    button2.click(function() {
        result.text(`The result is: ${parseInt(firstNumber.val()) - parseInt(secondNumber.val())}`);

        firstNumber.val(" ");
        secondNumber.val(" ");
    })
    button3.click(function() {
        result.text(`The result is: ${parseInt(firstNumber.val()) * parseInt(secondNumber.val())}`);


        firstNumber.val(" ");
        secondNumber.val(" ");
    })
    button4.click(function() {
        result.text(`The result is: ${parseInt(firstNumber.val()) / parseInt(secondNumber.val())}`);


        firstNumber.val(" ");
        secondNumber.val(" ");
    })
    button5.click(function() {
        let pow = Math.pow(parseInt(firstNumber.val()), parseInt(secondNumber.val()));
        result.text(`Number ${firstNumber.val()} on the power of ${secondNumber.val()} is ${pow}`);


        firstNumber.val(" ");
        secondNumber.val(" ");
    })

})