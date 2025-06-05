function addTwo(num:number):number{
    return num + 2
}
addTwo(3)

function getUpper(val:string){
    return val.toUpperCase()
}
getUpper("Hello")


function signUpUser(name:string , email:string, password:number){}
signUpUser("John","john@234",123)

let loginUser = (name:string,email:string,isPaid:boolean=false) =>{}
loginUser("John","John11@gmail.com")  


const getHello = (h:string):string =>{
    return "Get Hello"
}

const names = ["John","Sop","Alice"]

names.map((name):string =>{
return `name is ${names}`
})