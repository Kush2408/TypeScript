type User = {
    name: string;
    email: string;
    isActive : boolean;
}

let createUser = (user:User):User => {
return {name:"Sop",email:"Sop12@gmail.com", isActive:false}
} 
console.log(createUser({name:"Sop",email:"Sop12@gmail.com", isActive:false}))

type cardNumber = {
    cardnumber : string
}

type cardDate = {
    cardDate : string
}

type cardDetails = cardNumber & cardDate & {
    cvv : number 
} 