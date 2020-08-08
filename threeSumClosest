/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
    
    if ( nums.length === undefined || target === undefined || nums.length === 0 )
        return 
    
    nums.sort((a,b) => a-b);
    
    console.log(nums);
    
    let  hi, lo, currSum, diff = Number.MAX_VALUE; 
    
    for ( let i = 0 ; i < nums.length && diff !== 0  ; i ++ ) {
        lo = i + 1;
        hi = nums.length - 1;
        while ( lo < hi ) {
             currSum = nums[i] + nums[lo] + nums[hi];
            if (Math.abs( currSum - target)  < Math.abs(diff) ) diff = target - currSum;
            if ( currSum - target < 0 ) lo ++;
            else hi --;
        }
        
    }
    
    return target - diff;
    
};
