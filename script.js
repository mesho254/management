'use strict'
const closeLogin = document.querySelector('.close-login');
const EnterLogin = document.querySelector('.EnterLogin');
const loginCont = document.querySelector('.login');
const overlay = document.querySelector('.overlay');
const dropButton1 = document.querySelector('.btnDrop1');
const dropButton2 = document.querySelector('.btnDrop2');
const dropButton3 = document.querySelector('.btnDrop3');
const displayList1 = document.querySelector('.drop-services1');
const displayList2 = document.querySelector('.drop-services2');
const displayList3 = document.querySelector('.drop-services3');
const clickBody = document.querySelector('.Herosection');

const unclick = function () {
    displayList2.classList.add('hidden');
    displayList3.classList.add('hidden');
    displayList1.classList.add('hidden');
    clicked = true;
}
const terminate = function () {
    loginCont.classList.add('hidden');
    overlay.classList.add('hidden');
}
let clicked = false;

EnterLogin.addEventListener('click', function () {
    loginCont.classList.remove('hidden');
    overlay.classList.remove('hidden');
    unclick();

});
closeLogin.addEventListener('click', function () {
    terminate();
});
overlay.addEventListener('click', function () {
    terminate();
});
dropButton1.addEventListener('click', function () {
    if (clicked) {
        displayList2.classList.add('hidden');
        displayList3.classList.add('hidden');
        displayList1.classList.remove('hidden');
        clicked = false;
    }
    else {
        unclick();
    }
});

dropButton2.addEventListener('click', function () {
    if (clicked) {
        displayList1.classList.add('hidden');
        displayList3.classList.add('hidden');
        displayList2.classList.remove('hidden');
        clicked = false;
    } else {
        unclick();
    }
});
dropButton3.addEventListener('click', function () {
    if (clicked) {
        displayList1.classList.add('hidden');
        displayList2.classList.add('hidden');
        displayList3.classList.remove('hidden');
        clicked = false;
    } else {
        unclick();
    }
});
clickBody.addEventListener('click', function () {
    unclick();
})
