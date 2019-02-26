module.exports = function solveSudoku(matrix) {
  var result = [],
      options = []
      option = null;

  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      option = matrix[i][j];
      
      if (option === 0) {
        option = {
          row: i,
          col: j
        };
        options.push(option);
      }
    }
  }
  return result;
}
