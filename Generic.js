"use strict";
function identityOne(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree("3");
identityThree({ brand: "SG", type: 2 });
const getMoreSearchProducts = (products) => {
    const myIndex = 4;
    return products[myIndex];
};
console.log(getMoreSearchProducts);
