/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //
    let temp = nums[0]
    let sum = nums[0]
    
    for(let i = 1; i < nums.length; i++) {
        temp = Math.max(nums[i], nums[i] + temp);
        // max 값 색출한 이후 합이 줄어들경우 바뀌는 경우 방지
        if(temp > sum) {
            sum = temp
        }
    }
    
    return sum
};