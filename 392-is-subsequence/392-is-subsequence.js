/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // subesequence 순서가 동일
    let count = 0;
    for(let i = 0; i < t.length; i++) {
        if(s[count] === [...t][i]) {
            count ++
        }
    }
    return count === s.length
};