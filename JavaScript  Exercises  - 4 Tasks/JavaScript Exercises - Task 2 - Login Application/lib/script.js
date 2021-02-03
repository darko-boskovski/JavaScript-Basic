console.log(`Hello There`)


$(document).ready(function() {



    let userInput = $("#user");

    let userPass = $("#pass");

    let headerOne = $("#header");

    let button = $("#login");

    let headerTwo = $("#header2");




    let userNames = ["Pero", "Blazo", "Vojce", "Petre", "Risto", "Mile", "Cacko"]

    let passWords = ["1234", "5678", "91011", "11109", "8765", "4321", "qwerty"]


    button.click(function() {

        for (let i = 0; i < userNames.length; i++) {

            if (userInput.val() === userNames[i] && userPass.val() === passWords[i]) {
                headerTwo.html(`Hello ${userNames[i]}`);

                userInput.val('');
                userPass.val('');
                return
            }
        }
        for (let i = 0; i < userNames.length; i++) {
            if (userInput.val() !== userNames[i]) {
                headerTwo.html("Wrong Username");


            } else if (userPass.val() !== passWords[i]) {

                headerTwo.html("Wrong Password");

                userInput.val('');
                userPass.val('');
                return;
            }

        }
    });

})