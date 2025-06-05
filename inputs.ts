export function getInfo(){
console.log("getInfo")
const nameInput = document.getElementById('name') as HTMLInputElement
const name:string = String(nameInput.value)

const emailInput = document.getElementById('email') as HTMLInputElement
const email:string = String(emailInput.value)

const ageInput = document.getElementById('age') as HTMLInputElement;
const age: number = Number(ageInput.value);

const numberInput = document.getElementById('no') as HTMLInputElement;
const number: number = Number(numberInput.value); 

console.log(name,email,age,number)
}
