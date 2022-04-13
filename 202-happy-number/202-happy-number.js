/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    //
    const MAX_LIMIT_LOOP = 10
    let count = 0
    let sum = 0
    let numbers = []
    while(sum !== 1){
        numbers = n.toString().split('')
        sum = numbers.reduce((acc, cur) => {
            return acc += Math.pow(Number(cur), 2)
        }, 0)

        n = sum
        count++
        if(count === MAX_LIMIT_LOOP) {
            return false
        }
    }
    return sum === 1
};