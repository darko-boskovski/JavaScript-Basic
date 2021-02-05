console.log(`JavaScript says: Ola Que Pasa?`);


console.log(jQuery.fn.jquery);


$(document).ready(function() {


    let button = document.getElementById("button");
    console.log(button)
    let userNumber = document.getElementById("user_input");
    console.log(userNumber)
    let result = document.getElementById("numberToWords");



    let ends_with_double_zero = /(hundred|thousand|(m|b|tr|quadr)illion)$/;
    let ends_with_teen = /teen$/;
    let ends_with_y = /y$/;
    let ends_with_zero_to_twelve = /(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/;
    let lessThanThirteen = {
        zero: 'zeroth',
        one: 'first',
        two: 'second',
        three: 'third',
        four: 'fourth',
        five: 'fifth',
        six: 'sixth',
        seven: 'seventh',
        eight: 'eighth',
        nine: 'ninth',
        ten: 'tenth',
        eleven: 'eleventh',
        twelve: 'twelfth'
    };


    function makeOrdinal(words) {
        // Ends with *00 (100, 1000, etc.) or *teen (13, 14, 15, 16, 17, 18, 19)
        if (ends_with_double_zero.test(words) || ends_with_teen.test(words)) {
            return words + 'th';
        }
        // Ends with *y (20, 30, 40, 50, 60, 70, 80, 90)
        else if (ends_with_y.test(words)) {
            return words.replace(ends_with_y, 'ieth');
        }
        // Ends with one through twelve
        else if (ends_with_zero_to_twelve.test(words)) {
            return words.replace(ends_with_zero_to_twelve, replaceWithOrdinal);
        }
        return words;
    }

    function replaceWithOrdinal(numberWord) {
        return lessThanThirteen[numberWord];
    }


    let ten = 10;
    let one_hundred = 100;
    let one_thousand = 1000;
    let one_million = 1000000;
    let one_billion = 1000000000; //         1.000.000.000 (9)
    let one_trillion = 1000000000000; //     1.000.000.000.000 (12)
    let one_quadrillion = 1000000000000000; // 1.000.000.000.000.000 (15)
    let MAX = 9007199254740992; // 9.007.199.254.740.992 (15)

    let less_then_twenty = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];

    let tenths_less_then_hundred = [
        'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];


    function toWords(number, asOrdinal) {
        let words;
        let num = parseInt(number, 10);
        if (!isFinite(num)) throw new TypeError('Not a finite number: ' + number + ' (' + typeof number + ')');
        words = generateWords(num);
        return asOrdinal ? makeOrdinal(words) : words;
    }

    function generateWords(number) {
        let remainder, word,
            words = arguments[1];


        if (number === 0) {
            return !words ? 'zero' : words.join(' ').replace(/,$/, '');
        }

        if (!words) {
            words = [];
        }
        // If negative, prepend “minus”
        if (number < 0) {
            words.push('minus');
            number = Math.abs(number);
        }

        if (number < 20) {
            remainder = 0;
            word = less_then_twenty[number];

        } else if (number < one_hundred) {
            remainder = number % ten;
            word = tenths_less_then_hundred[Math.floor(number / ten)];
            // In case of remainder, we need to handle it here to be able to add the “-”
            if (remainder) {
                word += '-' + less_then_twenty[remainder];
                remainder = 0;
            }

        } else if (number < one_thousand) {
            remainder = number % one_hundred;
            word = generateWords(Math.floor(number / one_hundred)) + ' hundred';

        } else if (number < one_million) {
            remainder = number % one_thousand;
            word = generateWords(Math.floor(number / one_thousand)) + ' thousand,';

        } else if (number < one_billion) {
            remainder = number % one_million;
            word = generateWords(Math.floor(number / one_million)) + ' million,';

        } else if (number < one_trillion) {
            remainder = number % one_billion;
            word = generateWords(Math.floor(number / one_billion)) + ' billion,';

        } else if (number < one_quadrillion) {
            remainder = number % one_trillion;
            word = generateWords(Math.floor(number / one_trillion)) + ' trillion,';

        } else if (number <= MAX) {
            remainder = number % one_quadrillion;
            word = generateWords(Math.floor(number / one_quadrillion)) +
                ' quadrillion,';
        }

        words.push(word);
        return generateWords(remainder, words);
    }



    button.addEventListener('click', function(event) {
        event.preventDefault();

        let get_num = userNumber.value;

        if (get_num) {

            let num_to_words = toWords(get_num);
            result.textContent = num_to_words;
            num_to_words.innerText = num_to_words;
        }


    })







})