maxArea = (height) => {
  let p1 = 0,
    p2 = height.length - 1,
    maxWater = 0,
    currentWater;

  while (p1 < p2) {
    currentWater = Math.min(height[p1], height[p2]) * (p2 - p1);

    if (currentWater > maxWater) maxWater = currentWater;

    height[p1] > height[p2] ? p2-- : p1++;
  }

  return maxWater;
};
