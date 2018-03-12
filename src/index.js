module.exports = function solveSudoku(matrix) {
  for (var row = 0; row < 9; row++) {
    for (var col = 0; col < 9; col++) {
      if (matrix[row][col] === 0) { 
        var arrNull = [];
        for (var i = 0; i < 9; i++) { 
          // пушим значения столбцов, строк и мал квадратов    
          arrNull.push(matrix[i][col]);
          arrNull.push(matrix[row][i]);
          var smallSquareRow = Math.floor(row / 3) * 3;
          var smallSquareCol = Math.floor(col / 3) * 3;
          var squareNum = matrix[smallSquareRow + i % 3][smallSquareCol + Math.floor(i / 3)];
          arrNull.push(squareNum);
        }
        // убираем лишние значения (те которые конст и котор появ и нули)
        var endNumb = [];
        var all = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (var c = 0; c < all.length; c++) {
          if (arrNull.indexOf(all[c]) < 0) {
             endNumb.push(all[c]); 
          }
        }   
        // подставляем получ знач вместо нуля
        for (var d = 0; d < endNumb.length; d++) {
          matrix[row][col] = endNumb[d];
          // рекурсия
          var rec = solveSudoku(matrix);
          if (rec !== false) {
          return rec;
          }
        }
        // обнуляем
        matrix[row][col] = 0;
        return false;  
      }
    }
  }
return matrix;
// your solution 
}
