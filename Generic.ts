function identityOne(val: number | boolean): boolean | number {
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}
identityThree("3")

interface Ball{
    brand:string,
    type:number
}

identityThree<Ball>({brand:"SG",type:2})

const getMoreSearchProducts = <T>(products: T[]): T => {
    const myIndex = 4
    return products[myIndex]
}
console.log(getMoreSearchProducts)