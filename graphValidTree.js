const graphValidTree = (nodes, edges) => {
  if (nodes.length === 0 || nodes === undefined || edges === undefined)
    return false;
  if (nodes.length === 1 || nodes.length === 2) return true; //check 2 nodes case

  const g = createGraph(nodes, edges),
    visited = Array(nodes.length).fill(false);

  return (
    dfsFindCycle(0, -1, g, visited) &&
    visited.filter((visit) => visit === true).length === nodes.length
  );
};

const dfsFindCycle = (node, parentNode, g, visited) => {
  let res = true;
  if (visited[node]) return false;
  visited[node] = true;

  g[node].forEach((child) => {
    if (child !== parentNode && !dfsFindCycle(child, node, g, visited))
      res = false;
  });

  return res;
};

const createGraph = (nodes, edges) => {
  const g = new Array(nodes.length).fill(null).map((i) => []);

  edges.forEach((edge) => {
    g[edge[0]].push(edge[1]);
    g[edge[1]].push(edge[0]);
  });

  return g;
};

console.log(
  graphValidTree(
    [0, 1, 2, 3],
    [
      [0, 1],
      [0, 2],
    ]
  )
);
