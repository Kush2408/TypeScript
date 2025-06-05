"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInfo = getInfo;
function getInfo() {
    console.log("getInfo");
    const nameInput = document.getElementById('name');
    const name = String(nameInput.value);
    const emailInput = document.getElementById('email');
    const email = String(emailInput.value);
    const ageInput = document.getElementById('age');
    const age = Number(ageInput.value);
    const numberInput = document.getElementById('no');
    const number = Number(numberInput.value);
    console.log(name, email, age, number);
}
