let balance = 90000;
let masterpin = 0000;
let counter = 0;
const quick_1 = 1000;
const quick_2 = 3000;
const quick_3 = 5000;
const quick_4 = 10000;

function enter_pin_mk() {

    let pin = parseInt(prompt("Внесете го вашиот Пин - хинт: 0000"));
    if (pin === masterpin) {
        language();
    } else if (pin != masterpin) {
        counter = counter + 1;
        if (counter === 3) {
            wrongpin_mk();
        } else {
            enter_pin_mk();
        }
    } else {
        wrongpin_mk();
    }
}

function get_balance_mk() {
    alert(`Моменталната состојба на вашата сметка е: ${balance} денари`);
    atm_mk();
}

function make_withdrawal_mk() {
    let withdrawal = parseInt(prompt("Внесете ја посакуваната сума"));
    if (isNaN(withdrawal)) {
        alert("Грешка!: Ве молам внесете бројки!");
        make_withdrawal_mk();
    } else if (withdrawal % 100 !== 0) {
        error_bills_mk();
    } else if (balance < withdrawal) {
        error_funds_mk();
    } else {
        balance = balance - withdrawal;
        alert(`Повлековте ${withdrawal} денари од вашата сметка`)
        get_balance_mk();
    }
}

function error_mk() {
    alert("Грешка!: Ве молиме изберете број од 1 до 5.");
    atm_mk();
}

function error_bills_mk() {
    alert(`Банкоматот работи само со банкноти од 1000, 500 и 100 денари`);
    atm_mk();
}

function error_funds_mk() {
    alert(`Немате доволно средства на вашата сметка`);
    atm_mk();
}

function exit_mk() {
    let exit = confirm("Излез од програмата");
    if (exit) {
        window.close();
    } else {
        atm_mk();
    }
}

function wrongpin_mk() {
    alert(`Погрешен Пин! Имавтe 3 погрешни обиди, Излез од програмата`);
    window.close();
}

function atm_mk() {
    let select = parseInt(
        prompt("Ве молиме изберете:\n 1.) Состојба на сметка\n 2.) Исплата\n 3.) Брза Исплата\n 4.) Изврши Уплата\n 5.) Излез од програмата")
    );

    if (select === 1) {
        get_balance_mk();
    } else if (select === 2) {
        make_withdrawal_mk();
    } else if (select === 3) {
        quick_withdrawal_mk();
    } else if (select === 4) {
        make_deposit_mk();
    } else if (select === 5) {
        exit_mk();
    } else {
        error_mk();
    }
}

function quick_withdrawal_mk() {
    let quick = parseInt(prompt("Изберете една од опциите:\n 1.) 1000 денари\n 2.) 3000 денари\n 3.) 5000 денари\n 4.) 10000 денари\n 5.) Излез од програмата"));

    if (quick === 1) {
        if (balance - quick_1 < 0) {
            error_funds_mk();
        } else {
            balance = balance - quick_1;
            alert(`Повлековте ${quick_1} денари од вашата сметка`);
            get_balance_mk();
        }
    } else if (quick === 2) {
        if (balance - quick_2 < 0) {
            error_funds_mk();
        } else {
            balance = balance - quick_1;
            alert(`Повлековте ${quick_1} денари од вашата сметка`);
            get_balance_mk();
        }
    } else if (quick === 3) {
        if (balance - quick_3 < 0) {
            error_funds_mk();
        } else {
            balance = balance - quick_1;
            alert(`Повлековте ${quick_1} денари од вашата сметка`);
            get_balance_mk();
        }
    } else if (quick === 4) {
        if (balance - quick_4 < 0) {
            error_funds_mk();
        } else {
            balance = balance - quick_1;
            alert(`Повлековте ${quick_1} денари од вашата сметка`);
            get_balance_mk();
        }
    } else {
        error_mk();
    }

}


function language() {
    let select = parseInt(
        prompt("Ве молиме изберете јазик:\n 1.) Македонски\n 2.) English \n 3.) Излез од програмата")
    );

    if (select === 1) {
        atm_mk();
    } else if (select === 2) {
        atm();
    } else if (select === 3) {
        exit_mk();
    } else {
        error_mk();
    }
}

function enter_pin() {
    let pin = parseInt(prompt("Enter your Pin"));
    if (pin === masterpin) {
        atm();
    } else if (pin != masterpin) {
        counter = counter + 1;
        if (counter === 3) {
            wrongpin();
        } else {
            enter_pin();
        }
    } else {
        wrongpin();
    }
}



function get_balance() {
    alert(`Your current balance is: ${balance} denars`);
    atm();
}

function make_deposit() {
    let deposit = parseInt(prompt("Enter your deposit sum"));

    balance += deposit

    alert(`You have entered ${deposit} denars to your account`);
    get_balance();
    atm();
}

function make_deposit_mk() {
    let deposit = parseInt(prompt("Enter your deposit sum"));

    balance += deposit

    alert(`Внесовте ${deposit} денари на вашата сметка`);
    get_balance_mk();
    atm_mk();
}

function make_withdrawal() {
    let withdrawal = parseInt(prompt("Enter your desired sum"));
    if (isNaN(withdrawal)) {
        alert("Error: please enter a number!");
        make_withdrawal();
    } else if (withdrawal % 100 !== 0) {
        error_bills();
    } else if (balance < withdrawal) {
        error_funds();
    } else {
        balance = balance - withdrawal;
        alert(`You have withdrawn ${withdrawal} denars`)
        get_balance();

    }
}

function error() {
    alert("Error: accepted numbers are 1 through 5.");
    atm();
}

function error_bills() {
    alert(`The Atm only works with 1000, 500, 100 bills`);
    atm();
}

function error_funds() {
    alert(`Not enough money`);
    atm();
}

function exit() {
    let exit = confirm("You will now exit the program");
    if (exit) {
        window.close();
    } else {
        atm();
    }
}

function wrongpin() {
    alert(`Wrong Pin You will now exit the program`);
    window.close();
}

function atm() {
    let select = parseInt(prompt("Select a choice:\n 1.) Balance\n 2.) Withdrawal\n 3.) Quick Withdrawal\n 4.) Make Deposit\n 5.) Exit"));

    if (select === 1) {
        get_balance();
    } else if (select === 2) {
        make_withdrawal();
    } else if (select === 3) {
        quick_withdrawal();
    } else if (select === 4) {
        make_deposit();
    } else if (select === 5) {
        exit();
    } else {
        error();
    }
}

function quick_withdrawal() {
    let quick = parseInt(prompt("Select a choice:\n 1.) 1000 denars\n 2.) 3000 denars\n 3.) 5000 denars\n 4.) 10000 denars\n 5.) Exit"));
    if (quick === 1) {
        if (balance - quick_1 < 0) {
            error_funds();
        } else {
            balance = balance - quick_1;
            alert(`You have withdrawn ${quick_1} denars`);
            get_balance();
        }
    } else if (quick === 2) {
        if (balance - quick_2 < 0) {
            error_funds();
        } else {
            balance = balance - quick_2;
            alert(`You have withdrawn ${quick_2} denars`);
            get_balance();
        }
    } else if (quick === 3) {
        if (balance - quick_3 < 0) {
            error_funds();
        } else {
            balance = balance - quick_3;
            alert(`You have withdrawn ${quick_3} denars`);
            get_balance();
        }
    } else if (quick === 4) {
        if (balance - quick_4 < 0) {
            error_funds();
        } else {
            balance = balance - quick_4;
            alert(`You have withdrawn ${quick_4} denars`);
            get_balance();
        }
    } else {
        error();
    }

}



enter_pin_mk();