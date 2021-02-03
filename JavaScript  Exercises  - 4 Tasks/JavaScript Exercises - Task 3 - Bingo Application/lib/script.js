console.log(`Hello There`);


$(document).ready(function() {





    let headerOne = $("#header");
    let userNum1 = $("#num1");
    let userNum2 = $("#num2");
    let userNum3 = $("#num3");
    let userNum4 = $("#num4");
    let userNum5 = $("#num5");
    let button = $("#login");




    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37];

    let winnerCombo = [3, 31, 23, 5, 17];

    winnerCombo.sort(function(a, b) { return a - b });


    let userCombo = [];


    let printNum = function(array) {
        let orderedList = document.createElement("OL");
        orderedList.setAttribute("id", "myOl", "style-type", "none");
        document.body.appendChild(orderedList);

        for (let i = 0; i < array.length; i++) {

            let listItem = document.createElement("LI");
            let newNumber = document.createTextNode(`Number: "(${array[i]})"`);
            listItem.appendChild(newNumber);
            document.getElementById("myOl").appendChild(listItem);

        }
    }
    printNum(numbers);


    button.click(function() {

        userCombo.push(parseInt(userNum1.val()), parseInt(userNum2.val()), parseInt(userNum3.val()), parseInt(userNum4.val()), parseInt(userNum5.val()));
        userCombo.sort(function(a, b) { return a - b });

        arrayEquals(winnerCombo, userCombo);
    });

    function arrayEquals(a, b) {
        if (Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index])) {
            headerOne.text(`“You won 1000000$! Congrats!”`)
        } else {
            headerOne.text(`“More luck next time!”`)
        }

    }


})