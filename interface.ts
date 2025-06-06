interface User5 {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string
    startTrail(): string
    getCoupon(couponname:string,value:number):number
}

const Job: User5 = {
    dbId: 22, email: "jb@gmail,com", userId: 1221,
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name:'Jacob',off:1) =>{
        return 10
    }
}
console.log(Job)
