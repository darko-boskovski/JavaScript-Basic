console.log(`Hello There`)


$(document).ready(function() {




    let button = $("button").first();
    let userInput = $("input").first();
    let userColor = $("#color").first();
    let messageHeader = $("*").find("h3").first()

    // Сите бои во HTML //

    let htmlColorNames = [
        "AliceBlue",
        "AntiqueWhite",
        "Aqua",
        "Aquamarine",
        "Azure",
        "Beige",
        "Bisque",
        "Black",
        "BlanchedAlmond",
        "Blue",
        "BlueViolet",
        "Brown",
        "BurlyWood",
        "CadetBlue",
        "Chartreuse",
        "Chocolate",
        "Coral",
        "CornflowerBlue",
        "Cornsilk",
        "Crimson",
        "Cyan",
        "DarkBlue",
        "DarkCyan",
        "DarkGoldenrod",
        "DarkGray",
        "DarkGreen",
        "DarkKhaki",
        "DarkMagenta",
        "DarkOliveGreen",
        "DarkOrange",
        "DarkOrchid",
        "DarkRed",
        "DarkSalmon",
        "DarkSeaGreen",
        "DarkSlateBlue",
        "DarkSlateGray",
        "DarkTurquoise",
        "DarkViolet",
        "DeepPink",
        "DeepSkyBlue",
        "DimGray",
        "DodgerBlue",
        "FireBrick",
        "FloralWhite",
        "ForestGreen",
        "Fuchsia",
        "Gainsboro",
        "GhostWhite",
        "Gold",
        "Goldenrod",
        "Gray",
        "Green",
        "GreenYellow",
        "HoneyDew",
        "HotPink",
        "IndianRed",
        "Indigo",
        "Ivory",
        "Khaki",
        "Lavender",
        "LavenderBlush",
        "LawnGreen",
        "LemonChiffon",
        "LightBlue",
        "LightCoral",
        "LightCyan",
        "LightGoldenrodYellow",
        "LightGray",
        "LightGreen",
        "LightPink",
        "LightSalmon",
        "LightSalmon",
        "LightSeaGreen",
        "LightSkyBlue",
        "LightSlateGray",
        "LightSteelBlue",
        "LightYellow",
        "Lime",
        "LimeGreen",
        "Linen",
        "Magenta",
        "Maroon",
        "MediumAquamarine",
        "MediumBlue",
        "MediumOrchid",
        "MediumPurple",
        "MediumSeaGreen",
        "MediumSlateBlue",
        "MediumSlateBlue",
        "MediumSpringGreen",
        "MediumTurquoise",
        "MediumVioletRed",
        "MidnightBlue",
        "MintCream",
        "MistyRose",
        "Moccasin",
        "NavajoWhite",
        "Navy",
        "OldLace",
        "Olive",
        "OliveDrab",
        "Orange",
        "OrangeRed",
        "Orchid",
        "PaleGoldenrod",
        "PaleGreen",
        "PaleTurquoise",
        "PaleVioletRed",
        "PapayaWhip",
        "PeachPuff",
        "Peru",
        "Pink",
        "Plum",
        "PowderBlue",
        "Purple",
        "RebeccaPurple",
        "Red",
        "RosyBrown",
        "RoyalBlue",
        "SaddleBrown",
        "Salmon",
        "SandyBrown",
        "SeaGreen",
        "SeaShell",
        "Sienna",
        "Silver",
        "SkyBlue",
        "SlateBlue",
        "SlateGray",
        "Snow",
        "SpringGreen",
        "SteelBlue",
        "Tan",
        "Teal",
        "Thistle",
        "Tomato",
        "Turquoise",
        "Violet",
        "Wheat",
        "White",
        "WhiteSmoke",
        "Yellow",
        "YellowGreen",
    ].map(v => v.toLowerCase());

    function everyColorInHtml() {
        allColors = ""

        for (let i = 0; i < htmlColorNames.length; i++) {

            allColors += `${htmlColorNames[i]}\n`
        }
        return `Pick a Color:\n\n${allColors}`
    }

    console.log(everyColorInHtml())


    button.click(function() {

        if (validateHTMLColorName(userColor.val())) {

            button.after(`<h1 class = "h2"style = "color: ${userColor.val()};">The color of this header is:"${userInput.val()}"is:"${userColor.val()}"</h1>`);

        } else {

            if (userColor.val() === "") {
                messageHeader.text("Please enter something")

            } else if ((userColor.val().toLowerCase() === "transparent")) {
                messageHeader.text("There is a color but you can't see it! ;)")

            } else {
                messageHeader.text("Please enter valid color")
            }
        }
        userColor.val("")
        userInput.val("")

    });


    function validateHTMLColorName(color) {

        for (let i = 0; i < htmlColorNames.length; i++) {
            if (color.toLowerCase() === htmlColorNames[i]) {
                return true
            }
        }
        return false

    }




    // function validTextColour(colorString) {

    //     if (colorString === "") { return messageHeader.text("Please enter something"); }
    //     if (colorString !== "htmlColorNames") { return messageHeader.text("Please enter valid color!"); }
    //     if (colorString === "transparent") { return messageHeader.text("There is a color but you can't see it! ;)"); }

    //     let text = document.createElement("text");
    //     text.style.color = "rgb(0, 0, 0)";
    //     text.style.color = colorString;
    //     if (text.style.color !== "rgb(0, 0, 0)") { button.after(`<h1 style="color: ${userColor.val()};"> ${userInput.val()}</h1>`); }
    //     text.style.color = "rgb(255, 255, 255)";
    //     text.style.color = colorString;
    //     text.style.color !== "rgb(255, 255, 255)";


    // }

    // document.getElementById("testField").addEventListener("input", function() {
    //     document.getElementById("result").textContent = validTextColour(this.value);
    // });


    /* $('#color3').submit(function() {
            let bkcolor = $('#bkcolor').val();
            $("#clrtoggle").attr("style", '');
            $("#clrtoggle").css("background-color", bkcolor);
            createCookie("color", bkcolor);
            let dfndclr = $("#clrtoggle").attr("style");
            if (dfndclr == "") {
                alert("Not a Valid Color");
            }
            return false;
        }); */



})