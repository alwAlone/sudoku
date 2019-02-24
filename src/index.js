module.exports = function solveSudoku(matrix) {
  // Функция ищет все неизвестные ячейки
  function findZero(matrix) {
    var result = [];
    for (var row = 0; row < 9; row++) {
      for (var col = 0; col < 9; col++) {
        if (matrix[row][col] === 0) {
          result.push([row, col]);
        }
      }
    }
    return result;
  }
  // функция ищет варанты значений
  function findOptions(positions, matrix) {
    // Составляет массив из элементов. Формирует столбец.
    function findCol(matrix, pos) {
      var result = [],
          option = 0,
          col = pos;
      for (var i = 0; i < 9; i++) {
        option = matrix[i][col];
        if (option !== 0) {
          result.push(option);
        }
      }
      return result;
    }
    // Составляет массив из квадрата 3х3
    function findSquare(matrix, pos) {
      
    }
    for (var i = 0; i < positions.length; i++) {
      var pos = positions[i],
          row = pos[0],
          col = pos[1],
          square = [];

      row = matrix[row];
      col = findCol(matrix, col);
      console.log(col);
    }
    var result = positions;
    return result;
  }
  var positions = findZero(matrix),
      result = findOptions(positions, matrix);

  return result;
}
