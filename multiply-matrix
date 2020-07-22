const multiplyMatrix = (A, B) => {
  if (A === undefined || B === undefined || A[0].length !== B.length) return [];

  const n = A.length,
    m = B.length,
    t = B[0].length,
    res = Array(n)
      .fill(null)
      .map((i) => Array(t).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < t; j++) {
      for (let z = 0; z < m; z++) {
        res[i][j] += A[i][z] * B[z][j];
      }
    }
  }

  return res;
};

console.log(
  multiplyMatrix(
    [
      [1, 0, 0],
      [-1, 0, 3],
    ],
    [
      [7, 0, 0],
      [0, 0, 0],
      [0, 0, 1],
    ]
  )
);
