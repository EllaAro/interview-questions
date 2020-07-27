/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  if (board === undefined || word === undefined) return false;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let hash = {};

      if (dfs(hash, board, i, j, word, 0)) return true;
    }
  }

  return false;
};

const dfs = (hash, board, i, j, word, index) => {
  if (index === word.length) return true;

  if (
    i < 0 ||
    j < 0 ||
    i >= board.length ||
    j >= board[0].length ||
    hash[String([i, j])]
  )
    return false;

  if (board[i][j] !== word.charAt(index)) return false;

  hash[String([i, j])] = true;

  return (
    dfs(hash, board, i + 1, j, word, index + 1) ||
    dfs(hash, board, i, j + 1, word, index + 1) ||
    dfs(hash, board, i - 1, j, word, index + 1) ||
    dfs(hash, board, i, j - 1, word, index + 1)
  );
};

