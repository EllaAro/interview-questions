/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
    
    if ( s === undefined || p === undefined ) return false;
    
    const dp = Array(s.length+1).fill(null).map(i => Array(p.length+1).fill(false));
    
    dp[0][0]= true;
    
    for ( let i = 1 ; i < p.length ; i ++ ) if ( p.charAt(i) == '*' && dp[0][i-1] ) 
        dp[0][i+1] = true;
        
    
    
    for ( let i = 0 ; i < s.length ; i++ ) {
        for ( let j = 0 ; j < p.length ; j++ ) {
            
            if (p.charAt(j) == '.' || p.charAt(j) == s.charAt(i)) dp[i+1][j+1] = dp[i][j];
                        
            else if (p.charAt(j) == '*') {
                
                if (p.charAt(j-1) != s.charAt(i) && p.charAt(j-1) != '.') 
                    dp[i+1][j+1] = dp[i+1][j-1];
                
                else dp[i+1][j+1] = (dp[i+1][j] || dp[i][j+1] || dp[i+1][j-1]);
                
            }
        }
    }
    return dp[s.length][p.length];
    
    
};
