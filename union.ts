type User3 = {
name : string,
id : number
}

type Admin = {
username : string,
id : number
}

let Person1 : User3 | Admin = {name: "",id: 22}

Person1 = {username:'hh',id:33}