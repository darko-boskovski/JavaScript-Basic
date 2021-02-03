console.log('Lots of exercises...');


// Task 04
// inputs
let inputName = document.getElementById('nameRec');
let inputIngredients = document.getElementById('ingRec');
let inputTime = document.getElementById('timeRec');
// buttons
let saveBtn = document.getElementById('saveBtn');
// table body
let tbody = document.getElementById('tbody');

let shortestTime = document.getElementById(`shorter`);
let longestTime = document.getElementById(`longer`);
let showAll = document.getElementById(`show-all`);


let timeArray = []
console.log(timeArray)

let counter = 1;
// events
saveBtn.addEventListener('click', function() {
    let nameRec = inputName.value;
    let ingRec = inputIngredients.value;
    let timeRec = inputTime.value;

    tbody.innerHTML += `
        <tr>
            <td> ${counter} </td>
            <td> ${nameRec} </td>
            <td> ${ingRec} </td>
            <td> ${timeRec} </td>
            <td> <button class="delBtn">Delete</button> </td>
        </tr>`;

    // all delete btns
    let delBtns = document.getElementsByClassName('delBtn');

    for (let i = 0; i < delBtns.length; i++) {
        delBtns[i].addEventListener('click', function(event) {
            event.target.parentNode.parentNode.remove(event.parentNode);
        }, false)
    }
    timeArray.push(timeRec)
    counter++;
    inputName.value = "";
    inputIngredients.value = "";
    inputTime.value = "";

});

shortestTime.addEventListener("click", function() {

    minValue = parseInt(tbody.children[0].cells[3].innerText);
    console.log(tbody.children);

    for (let i = 0; i < tbody.children.length; i++) {

        if (minValue > parseInt(tbody.children[i].cells[3].innerText)) {
            minValue = parseInt(tbody.children[i].cells[3].innerText);
        }

    }

    console.log(minValue)
    for (let i = 0; i < tbody.children.length; i++) {

        if (minValue !== parseInt(tbody.children[i].cells[3].innerText)) {
            tbody.children[i].style.display = 'none'

        } else {
            tbody.children[i].style.display = 'table-row'
        }

    }

});

longestTime.addEventListener("click", function() {

    maxValue = parseInt(tbody.children[0].cells[3].innerText);

    for (let i = 0; i < tbody.children.length; i++) {

        if (maxValue < parseInt(tbody.children[i].cells[3].innerText)) {
            maxValue = parseInt(tbody.children[i].cells[3].innerText);
        }

    }
    for (let i = 0; i < tbody.children.length; i++) {

        if (maxValue !== parseInt(tbody.children[i].cells[3].innerText)) {
            tbody.children[i].style.display = 'none';

        } else {
            tbody.children[i].style.display = 'table-row';
        }

    }
    console.log(maxValue);

});

showAll.addEventListener("click", function() {
    for (let i = 0; i < tbody.children.length; i++) {

        tbody.children[i].style.display = 'table-row';

    }

});