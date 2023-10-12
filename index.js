const example = [
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "B", "A"]
];

const whereIsWaldo = (matrix) => {
  const firstElement = matrix[0][0];
  let differentElement = null;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] !== firstElement) {
        if (differentElement === null) {
          differentElement = matrix[row][col];
          return [row + 1, col + 1];
        } else {
          if (matrix[row][col] !== differentElement) {
            return [row + 1, col + 1];
          }
        }
      }
    }
  }
};
const result = whereIsWaldo(example);
console.log(result); 
