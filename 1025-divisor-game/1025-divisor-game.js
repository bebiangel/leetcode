/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
    //
    let result = false;
    let dp = [0];
    
    for(let i = 1; i <= n; i++) { 
        dp[i] = dp[i-1] +1
    }
    
    return dp[n] % 2 === 0;
};