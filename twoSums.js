const twoSum = (nums, target) => {
    if ( nums.length === 0 || nums === undefined ) return undefined;
    const hash = {};
    let partOfTarget; 
    
    for( let i = 0 ; i < nums.length ; i ++ ) hash[nums[i]] = i; 
    
    for( let i = 0 ; i < nums.length ; i ++ ) {
        partOfTarget = target - nums[i];
        if ( hash[partOfTarget] && hash[partOfTarget] !== i ) return  [i, hash[partOfTarget]];
    }
    return [];
};
