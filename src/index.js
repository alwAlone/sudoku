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
      var result = [],
          row = pos[0],
          col = pos[1],
          sq_row = row/3,
          sq_col = col/3,
          opt = null;
          
      if ((sq_row >= 0) && (sq_row < 1)) {
        for (var i = 0; i < 3; i++) {
          for (var j = 0; j < 3; j++) {
            opt = matrix[i][j];
            result.push(opt);
          }
        }
      } else if ((sq >= 1) && (sq < 2)) {
        for (var i = 3; i < 6; i++) {
          for (var j = 3; j < 6; j++) {
            opt = matrix[i][j];
            result.push(opt);
          }
        }
      } else if ((sq >= 2) && (sq < 3)) {
        for (var i = 6; i < 9; i++) {
          for (var j = 6; j < 9; j++) {
            opt = matrix[i][j];
            result.push(opt);
          }
        }
      }
      console.log(result);
      return result;
    }


    for (var i = 0; i < positions.length; i++) {
      var pos = positions[i],
          row = pos[0],
          col = pos[1],
          square = [];

      row = matrix[row];
      col = findCol(matrix, col);
      square = findSquare(matrix, pos);
    }
    var result = square;
    return result;
  }

  var positions = findZero(matrix),
      result = findOptions(positions, matrix);
  return result;
}
