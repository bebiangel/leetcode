/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    //
    let offset = 1;
    const arr = Array(n+1).fill(0);
    for(let i = 1; i < n+1; i++) {
        if(offset * 2 === i) {
            offset = i;
        }
        arr[i] = arr[i-offset] + 1
    }
    return arr
};