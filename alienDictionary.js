const alienOrder = (words) => {
  if (words === undefined || words.length === 0) return "";

  const g = initGraph(words),
    visited = {},
    nodeNum = Object.keys(g).length,
    order = new Array(nodeNum),
    start = nodeNum - 1,
    nodes = Object.keys(g);

  nodes.forEach((node) => (visited[node] = false));

  return topologicalSort(g, nodes, visited, order, start);
};

const topologicalSort = (g, nodes, visited, order, start) => {
  let i = start;
  nodes.forEach((node) => {
    if (visited[node] === false) i = dfs(g, i, node, visited, order);
  });

  return order.toString();
};

const dfs = (g, i, node, visited, order) => {
  visited[node] = true;
  g[node].forEach((child) => {
    if (visited[child] === false) i = dfs(g, i, child, visited, order);
  });
  order[i] = node;
  return i - 1;
};
const initGraph = (words) => {
  const g = {};
  let word, prevWord;

  g[words[0].charAt(0)] = [];

  for (let i = 1; i < words.length; i++) {
    word = words[i];
    prevWord = words[i - 1];
    if (word !== undefined || word.length !== 0) {
      if (!g[word.charAt(0)]) g[word.charAt(0)] = [];
      if (prevWord.charAt(0) !== word.charAt(0))
        g[prevWord.charAt(0)].push(word.charAt(0));
    }
  }

  for (let i = 0; i < words.length; i++) {
    word = words[i];
    if (word !== undefined || word.length !== 0) {
      for (let j = 1; j < word.length; j++) {
        if (!g[word.charAt(j)]) g[word.charAt(j)] = [];
        if (
          g[word.charAt(j - 1)] &&
          word.charAt(j - 1) !== word.charAt(j) &&
          g[word.charAt(j - 1)].filter((char) => char === word.charAt(j)) <= 0
        )
          g[word.charAt(j - 1)].push(word.charAt(j));
      }
    }
  }

  return g;
};

console.log(alienOrder(["wrt", "wrf", "er", "ett", "rftt"]));
