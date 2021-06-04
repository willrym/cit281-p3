/*
    CIT 281 Project 3
    Name: Will Mosher
*/
module.exports = {
    coinCount
};
function validDenomination(coin){return [1, 5, 10, 25, 50, 100].indexOf(coin) !== -1 ? true : false;}

// console.log(validDenomination(13));

function valueFromCoinObject(obj) {
    const {denom = 0, count = 0} = obj;
    return denom*count;
}
// console.log(valueFromCoinObject({denom:10,count:2}))
// let jamesPolk = [{denom: 3, count: 2},{denom: 4, count: 5}]
function valueFromArray(arr){
    let coins = []
    for (let i = 0; i < arr.length; i++) {
        coins.push(valueFromCoinObject(arr[i]))
    }
    // return coins
    return coins.reduce((total,nums) => total + nums)
}
// valueFromArray(jamesPolk)

function coinCount(...coinage) {
    let arrayCoins = [...coinage]
    return valueFromArray(arrayCoins)
}
/* 
console.log("{}", coinCount({denom: 5, count: 3}));
console.log("{}s", coinCount({denom: 5, count: 3},{denom: 10, count: 2}));
const coins = [{denom: 25, count: 2},{denom: 1, count: 7}];
console.log("...[{}]", coinCount(...coins));
console.log("[{}]", coinCount(coins));
*/