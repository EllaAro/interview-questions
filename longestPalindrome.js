/**
 * @param {string} s
 * @return {string}
 */

// two solutions, one is expend around index and one is DP

const longestPalindrome = s => {
    
    if ( s === undefined || s.length === 0 ) return "";
    
    // Boolean matrix
    const n = s.length, 
          dp = Array(s.length).fill(null).map((i) => Array(s.length).fill(false));
   
    //res
    let res = "";
    
    for ( let i = n-1 ; i >=0 ; i -- ) {
        for ( let j = i ; j < n ; j ++ ) {
            
            dp[i][j] =  ( s.charAt(i) === s.charAt(j) ) && ( j - i < 3 || dp[i+1][j-1] );
            
            if (dp[i][j] && (res == null || j - i + 1 > res.length )) res = s.substring(i, j + 1);
      
        }
    }
 
        
    
    
    return res;
    
};
