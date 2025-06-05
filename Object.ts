const User = {
    name:"Alice",
    email:"al123@gmail.com",
    isActive : true 
}

// function createUser({name: string, isPaid: boolean}){}
// let newUser = {name:'Kush',isPaid:false,email:'kp24@gmail.com'}
// createUser(newUser)

function createCourse():{name: string, price: number}{
    return{name:'reactJs',price: 20000}
}
createCourse()



export{}