"use strict";
const Job = {
    dbId: 22, email: "jb@gmail,com", userId: 1221,
    startTrail: () => {
        return "trail started";
    },
    getCoupon: (name, off) => {
        return 10;
    }
};
console.log(Job);
