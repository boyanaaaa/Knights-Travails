function knightMoves(start, end) {
  //all the possible directions:
  const directions = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

  // check if the coordinates are in the square
  function isValid(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  const queue = [];
  const visited = new Set();

  // add the start point and an array with the path to the end point
  queue.push([start, [start]]);

  //marks which fields have been visited and saves them in a Set()
  //must be a string so that Set() can compare them
  visited.add(start.toString());

  while (queue.length > 0) {
    const item = queue.shift();
    const current = item[0];
    const path = item[1];
    const x = current[0];
    const y = current[1];

    if (x === end[0] && y === end[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach((pos) => console.log(pos));
      return path;
    }

    for (let [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;
      const key = [newX, newY].toString();

      //check if it is valid and visited and adds it into thw queue
      if (isValid(newX, newY) && !visited.has(key)) {
        visited.add(key);
        queue.push([
          [newX, newY],
          [...path, [newX, newY]],
        ]);
      }
    }
  }
  return null;
}

console.log(knightMoves([0, 0], [3, 3]));
console.log(knightMoves([0, 0], [7, 7]));
