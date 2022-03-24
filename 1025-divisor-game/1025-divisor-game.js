/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
    //
    let dp = [0];
    
    for(let i = 1; i <= n; i++) { 
        // alice, bob은 1을 번갈아가며 선택한다는 가정으로 계산
        // n값이 동일해도 alice, bob이 1 이외의 숫자를 선택시 결과가 true/false가 
        // 다르게 결과가 나오는 상황이 발생
        dp[i] = dp[i-1] +1
    }
    
    return dp[n] % 2 === 0;
};