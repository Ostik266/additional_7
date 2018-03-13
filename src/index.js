module.exports = function solveSudoku(matrix) {

  let sudoku = matrix;
  let current = 0;
  let variants = [];
  
  let rowsorter = i => {
      let currentrow = sudoku[i];
      rowelement = false;
      for (let a = 0; a < 10; a++) {
        if (currentrow[a] === current)
        rowelement = true;
      };
    };
  let columnsorter = j => {
    let currentcolumn = [];
    sudoku.forEach((element, a) => {
      currentcolumn[a] = sudoku[a][j];
    });
    columnelement = false;
    for (let a = 0; a < 10; a++) {
      
      if (currentcolumn[a] === current)
      columnelement = true;
    };
  };
  let blocksorter = (i,j) => {
    let currentblock = [];
    
  
  };
  
  
    let numbers = {
      9: 9,
      8: 9,
      7: 9,
      6: 9,
      5: 9,
      4: 9,
      3: 9,
      2: 9,
      1: 9,
    };
    for (i = 0; i < matrix.length; i++)
    {
      for (j = 0; j < matrix[i].length; j++)
      {
        if (matrix[i][j] === 0)
        continue;
        else {
          numbers[matrix[i][j]]--;
        }
        if (numbers[matrix[i][j]] === 0)
        delete numbers[matrix[i][j]]
      }
    }
  
  function solveSudoku() {
    for (i = 0; i < sudoku.length; i++)
    {
      for (j = 0; j < sudoku[i].length; j++)
      {
        if (sudoku[i][j] === 0)
        {
          for (let a = 1; a < 10; a++)
          {
            if (numbers[a])
            {
              current = a;
              rowsorter(i);
              columnsorter(j);
              if (rowelement == false && columnelement != true )
              {
                variants.push(current);
              }
            }
          }
          if (variants.length === 1)
          {
            sudoku[i][j] = variants[0];
            numbers[variants[0]]--;
            if (numbers[variants[0]] === 0)
            delete numbers[variants[0]];
            variants = [];
          }
        }
      }
    }
  if (numbers.length !== undefined)
  solveSudoku()
  };
  solveSudoku();


  return sudoku;

}
