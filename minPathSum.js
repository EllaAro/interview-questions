/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = grid => {
    
    if ( grid === undefined || grid.length === 0 || grid[0].length === 0 )
        return -1;
    
    const m = grid.length, n = grid[0].length;
    
    const dp = Array(m).fill(null).map((i) => Array(n).fill(0));
    
    dp[0][0] = grid[0][0];
    
    for ( let i = 1 ; i < m ; i ++ ) dp[i][0] = dp[i-1][0] + grid[i][0];
    
    for ( let i = 1 ; i < n ; i ++ ) dp[0][i] = dp[0][i-1] + grid[0][i];
    
    for ( let i = 1 ; i < m ; i ++ ) {
        for ( let j = 1 ; j < n ; j ++ ) {
           
            dp[i][j] = grid[i][j] + Math.min(dp[i-1][j], dp[i][j-1]);
            
        }
    }
    
    return dp[m-1][n-1];
    
};
