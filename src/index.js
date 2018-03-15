module.exports = function solveSudoku(matrix) {
let counter = 0;
  let sudoku = matrix;
let current = 0;
let variants = [];
function isEmpty(obj) {
    for (var key in obj) {
      return false;
    }
    return true;
  };
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
let blocksorter = (i, j) => {
    let currentblock = [];
    if (0<=i && i<=2 && 0<=j && j<=2)
    {
      for (let a = 0; a <= 2; a++)
      {
        for (let b = 0; b <= 2; b++)
        {currentblock.push(sudoku[a][b])}
      }
    }
    if (3<=i && i<=5 && 0<=j && j<=2)
    {
      for (let a = 3; a <= 5; a++)
      {
        for (let b = 0; b <= 2; b++)
        {currentblock.push(sudoku[a][b])}
      }
    }
    if (6<=i && i<=8 && 0<=j && j<=2)
    {
      for (let a = 6; a <= 8; a++)
      {
        for (let b = 0; b <= 2; b++)
        {currentblock.push(sudoku[a][b])}
      }
    }
    if (0<=i && i<=2 && 3<=j && j<=5)
    {
      for (let a = 0; a <= 2; a++)
      {
        for (let b = 3; b <= 5; b++)
        {currentblock.push(sudoku[a][b])}
      }
    }
    if (3<=i && i<=5 && 3<=j && j<=5)
    {
      for (let a = 3; a <= 5; a++)
      {
        for (let b = 3; b <= 5; b++)
        {currentblock.push(sudoku[a][b])}
      }
    }
    if (6<=i && i<=8 && 3<=j && j<=5)
    {
      for (let a = 6; a <= 8; a++)
      {
        for (let b = 3; b <= 5; b++)
        {currentblock.push(sudoku[a][b])}
      }
    }
    if (0<=i && i<=2 && 6<=j && j<=8)
    {
      for (let a = 0; a <= 2; a++)
      {
        for (let b = 6; b <= 8; b++)
        {currentblock.push(sudoku[a][b])}
      }
    }
    if (3<=i && i<=5 && 6<=j && j<=8)
    {
      for (let a = 3; a <= 5; a++)
      {
        for (let b = 6; b <= 8; b++)
        {currentblock.push(sudoku[a][b])}
      }
    }
    if (6<=i && i<=8 && 6<=j && j<=8)
    {
      for (let a = 6; a <= 8; a++)
      {
        for (let b = 6; b <= 8; b++)
        {currentblock.push(sudoku[a][b])}
      }
    }
    blockelement = false;
    for (let a = 0; a < 10; a++)
    {
      if (currentblock[a] === current)
      blockelement = true;
    }
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
  
    for (i = 0; i < sudoku.length; i++)
    {
      for (j = 0; j < sudoku[i].length; j++)
      {
        if (sudoku[i][j] === 0)
        continue;
        else {
          numbers[sudoku[i][j]]--;
        }
        if (numbers[sudoku[i][j]] === 0)
        delete numbers[sudoku[i][j]]
      }
    }
  
  var firstzerovariant = [];
  var enotherzerovariant = [];
  function blocksolver(){
    var blockvariants = [
      [[],[],[],[],[],[],[],[],[]],
      [[],[],[],[],[],[],[],[],[]],
      [[],[],[],[],[],[],[],[],[]],
      [[],[],[],[],[],[],[],[],[]],
      [[],[],[],[],[],[],[],[],[]],
      [[],[],[],[],[],[],[],[],[]],
      [[],[],[],[],[],[],[],[],[]],
      [[],[],[],[],[],[],[],[],[]],
      [[],[],[],[],[],[],[],[],[]]
    ];
  for (let i = 0; i<=2; i++){
    for (let j =0; j<=2; j++){
      if (sudoku[i][j] !== 0)
      blockvariants[i][j].push(0)
      if (sudoku[i][j] === 0){
        for (let a = 0; a < 9; a++)
          {
            if (numbers[a])
            {
              current = a;
              rowsorter(i);
              columnsorter(j);
              blocksorter(i, j);
            if (rowelement != true && columnelement != true && blockelement != true)
              {
                blockvariants[i][j].push(current);
              }
            }
          }
      }
    }
  }
  for (let i = 0; i<=2; i++){
    for (let j =0; j<=2; j++){
      if (blockvariants[i][j][0] !== 0){
        firstzerovariant = blockvariants[i][j];
        for (let a = 0; a<=2; a++){
          for (let b =0; b<=2; b++){
            if ((a !== i && b !== j) || (a !== i && b === j) || (a === i && b !== j)){
              if (blockvariants[a][b][0] !== 0){
                enotherzerovariant = blockvariants[a][b];
                Difference(firstzerovariant, enotherzerovariant)
              }
            }
          }
        }
        if (firstzerovariant.length === 1 && firstzerovariant[0] !== 0){
	      current = firstzerovariant[0];
	      rowsorter(i);
          columnsorter(j);
             blocksorter(i, j);
            if (rowelement != true && columnelement != true && blockelement != true)
              {
                sudoku[i][j] = firstzerovariant[0];
        numbers[firstzerovariant[0]]--;
        if (numbers[firstzerovariant[0]] === 0)
        delete numbers[firstzerovariant[0]];
              }
        
      }
    }
  }
}
  for (let i = 0; i<=2; i++){
    for (let j =3; j<=5; j++){
      if (sudoku[i][j] !== 0)
      blockvariants[i][j].push(0)
      if (sudoku[i][j] === 0){
        for (let a = 1; a < 10; a++)
          {
            if (numbers[a])
            {
              current = a;
              rowsorter(i);
              columnsorter(j);
             blocksorter(i, j);
            if (rowelement != true && columnelement != true && blockelement != true)
              {
                blockvariants[i][j].push(current);
              }
            }
          }
      }
    }
  }
  for (let i = 0; i<=2; i++){
  for (let j =3; j<=5; j++){
    if (blockvariants[i][j][0] !== 0){
      firstzerovariant = blockvariants[i][j];
      for (let a = 0; a<=2; a++){
        for (let b =3; b<=5; b++){
          if ((a !== i && b !== j) || (a !== i && b === j) || (a === i && b !== j)){
            if (blockvariants[a][b][0] !== 0){
              enotherzerovariant = blockvariants[a][b];
              Difference(firstzerovariant, enotherzerovariant)
            }
          }
        }
      }
      if (firstzerovariant.length === 1 && firstzerovariant[0] !== 0){
	      current = firstzerovariant[0];
	      rowsorter(i);
          columnsorter(j);
            blocksorter(i, j);
            if (rowelement != true && columnelement != true && blockelement != true)
              {
                sudoku[i][j] = firstzerovariant[0];
        numbers[firstzerovariant[0]]--;
        if (numbers[firstzerovariant[0]] === 0)
        delete numbers[firstzerovariant[0]];
              }
        
      }
  }
}
}
  for (let i = 0; i<=2; i++){
    for (let j =6; j<=8; j++){
      if (sudoku[i][j] !== 0)
      blockvariants[i][j].push(0)
      if (sudoku[i][j] === 0){
        for (let a = 1; a < 10; a++)
          {
            if (numbers[a])
            {
              current = a;
              rowsorter(i);
              columnsorter(j);
              blocksorter(i, j);
            if (rowelement != true && columnelement != true && blockelement != true)
              {
                blockvariants[i][j].push(current);
              }
            }
          }
      }
    }
  }
  for (let i = 0; i<=2; i++){
  for (let j =6; j<=8; j++){
    if (blockvariants[i][j][0] !== 0){
      firstzerovariant = blockvariants[i][j];
      for (let a = 0; a<=2; a++){
        for (let b =6; b<=8; b++){
          if ((a !== i && b !== j) || (a !== i && b === j) || (a === i && b !== j)){
            if (blockvariants[a][b][0] !== 0){
              enotherzerovariant = blockvariants[a][b];
              Difference(firstzerovariant, enotherzerovariant)
            }
          }
        }
      }
      if (firstzerovariant.length === 1 && firstzerovariant[0] !== 0){
	      current = firstzerovariant[0];
	      rowsorter(i);
          columnsorter(j);
              blocksorter(i, j);
            if (rowelement != true && columnelement != true && blockelement != true)
              {
                sudoku[i][j] = firstzerovariant[0];
        numbers[firstzerovariant[0]]--;
        if (numbers[firstzerovariant[0]] === 0)
        delete numbers[firstzerovariant[0]];
              }
        
      }
  }
}
}
  for (let i = 3; i<=5; i++){
    for (let j =0; j<=2; j++){
      if (sudoku[i][j] !== 0)
      blockvariants[i][j].push(0)
      if (sudoku[i][j] === 0){
        for (let a = 1; a < 10; a++)
          {
            if (numbers[a])
            {
              current = a;
              rowsorter(i);
              columnsorter(j);
              blocksorter(i, j);
            if (rowelement != true && columnelement != true && blockelement != true)
              {
                blockvariants[i][j].push(current);
              }
            }
          }
      }
    }
  }
  for (let i = 3; i<=5; i++){
  for (let j =0; j<=2; j++){
    if (blockvariants[i][j][0] !== 0){
      firstzerovariant = blockvariants[i][j];
      for (let a = 3; a<=5; a++){
        for (let b =0; b<=2; b++){
          if ((a !== i && b !== j) || (a !== i && b === j) || (a === i && b !== j)){
            if (blockvariants[a][b][0] !== 0){
              enotherzerovariant = blockvariants[a][b];
              Difference(firstzerovariant, enotherzerovariant)
            }
          }
        }
      }
      if (firstzerovariant.length === 1 && firstzerovariant[0] !== 0){
	      current = firstzerovariant[0];
	      rowsorter(i);
          columnsorter(j);
              blocksorter(i, j);
            if (rowelement != true && columnelement != true && blockelement != true)
              {
                sudoku[i][j] = firstzerovariant[0];
        numbers[firstzerovariant[0]]--;
        if (numbers[firstzerovariant[0]] === 0)
        delete numbers[firstzerovariant[0]];
              }
        
      }
  }
}
}
  for (let i = 3; i<=5; i++){
    for (let j =3; j<=5; j++){
      if (sudoku[i][j] !== 0)
      blockvariants[i][j].push(0)
      if (sudoku[i][j] === 0){
        for (let a = 1; a < 10; a++)
          {
            if (numbers[a])
            {
              current = a;
              rowsorter(i);
              columnsorter(j);
              blocksorter(i, j);
            if (rowelement != true && columnelement != true && blockelement != true)
              {
                blockvariants[i][j].push(current);
              }
            }
          }
      }
    }
  }
  for (let i = 3; i<=5; i++){
  for (let j =3; j<=5; j++){
    if (blockvariants[i][j][0] !== 0){
      firstzerovariant = blockvariants[i][j];
      for (let a = 3; a<=5; a++){
        for (let b =3; b<=5; b++){
          if ((a !== i && b !== j) || (a !== i && b === j) || (a === i && b !== j)){
            if (blockvariants[a][b][0] !== 0){
              enotherzerovariant = blockvariants[a][b];
              Difference(firstzerovariant, enotherzerovariant)
            }
          }
        }
      }
      if (firstzerovariant.length === 1 && firstzerovariant[0] !== 0){
	      current = firstzerovariant[0];
	      rowsorter(i);
          columnsorter(j);
              blocksorter(i, j);
            if (rowelement != true && columnelement != true && blockelement != true)
              {
                sudoku[i][j] = firstzerovariant[0];
        numbers[firstzerovariant[0]]--;
        if (numbers[firstzerovariant[0]] === 0)
        delete numbers[firstzerovariant[0]];
              }
        
      }
  }
}
}
  for (let i = 3; i<=5; i++){
    for (let j =6; j<=8; j++){
      if (sudoku[i][j] !== 0)
      blockvariants[i][j].push(0)
      if (sudoku[i][j] === 0){
        for (let a = 1; a < 10; a++)
          {
            if (numbers[a])
            {
              current = a;
              rowsorter(i);
              columnsorter(j);
              blocksorter(i, j);
            if (rowelement != true && columnelement != true && blockelement != true)
              {
                blockvariants[i][j].push(current);
              }
            }
          }
      }
    }
  }
  for (let i = 3; i<=5; i++){
  for (let j =6; j<=8; j++){
    if (blockvariants[i][j][0] !== 0){
      firstzerovariant = blockvariants[i][j];
      for (let a = 3; a<=5; a++){
        for (let b =6; b<=8; b++){
          if ((a !== i && b !== j) || (a !== i && b === j) || (a === i && b !== j)){
            if (blockvariants[a][b][0] !== 0){
              enotherzerovariant = blockvariants[a][b];
              Difference(firstzerovariant, enotherzerovariant)
            }
          }
        }
      }
      if (firstzerovariant.length === 1 && firstzerovariant[0] !== 0){
	      current = firstzerovariant[0];
	      rowsorter(i);
          columnsorter(j);
              blocksorter(i, j);
            if (rowelement != true && columnelement != true && blockelement != true)
              {
                sudoku[i][j] = firstzerovariant[0];
        numbers[firstzerovariant[0]]--;
        if (numbers[firstzerovariant[0]] === 0)
        delete numbers[firstzerovariant[0]];
              }
        
      }
  }
}
}
  for (let i = 6; i<=8; i++){
    for (let j =0; j<=2; j++){
      if (sudoku[i][j] !== 0)
      blockvariants[i][j].push(0)
      if (sudoku[i][j] === 0){
        for (let a = 1; a < 10; a++)
          {
            if (numbers[a])
            {
              current = a;
              rowsorter(i);
              columnsorter(j);
              blocksorter(i, j);
            if (rowelement != true && columnelement != true && blockelement != true)
              {
                blockvariants[i][j].push(current);
              }
            }
          }
      }
    }
  }
  for (let i = 6; i<=8; i++){
  for (let j =0; j<=2; j++){
    if (blockvariants[i][j][0] !== 0){
      firstzerovariant = blockvariants[i][j];
      for (let a = 6; a<=8; a++){
        for (let b =0; b<=2; b++){
          if ((a !== i && b !== j) || (a !== i && b === j) || (a === i && b !== j)){
            if (blockvariants[a][b][0] !== 0){
              enotherzerovariant = blockvariants[a][b];
              Difference(firstzerovariant, enotherzerovariant)
            }
          }
        }
      }
      if (firstzerovariant.length === 1 && firstzerovariant[0] !== 0){
	      current = firstzerovariant[0];
	      rowsorter(i);
          columnsorter(j);
              blocksorter(i, j);
            if (rowelement != true && columnelement != true && blockelement != true)
              {
                sudoku[i][j] = firstzerovariant[0];
        numbers[firstzerovariant[0]]--;
        if (numbers[firstzerovariant[0]] === 0)
        delete numbers[firstzerovariant[0]];
              }
        
      }
  }
}
}
  for (let i = 6; i<=8; i++){
    for (let j =3; j<=5; j++){
      if (sudoku[i][j] !== 0)
      blockvariants[i][j].push(0)
      if (sudoku[i][j] === 0){
        for (let a = 1; a < 10; a++)
          {
            if (numbers[a])
            {
              current = a;
              rowsorter(i);
              columnsorter(j);
              blocksorter(i, j);
            if (rowelement != true && columnelement != true && blockelement != true)
              {
                blockvariants[i][j].push(current);
              }
            }
          }
      }
    }
  }
  for (let i = 6; i<=8; i++){
  for (let j =3; j<=5; j++){
    if (blockvariants[i][j][0] !== 0){
      firstzerovariant = blockvariants[i][j];
      for (let a = 6; a<=8; a++){
        for (let b =3; b<=5; b++){
          if ((a !== i && b !== j) || (a !== i && b === j) || (a === i && b !== j)){
            if (blockvariants[a][b][0] !== 0){
              enotherzerovariant = blockvariants[a][b];
              Difference(firstzerovariant, enotherzerovariant)
            }
          }
        }
      }
      if (firstzerovariant.length === 1 && firstzerovariant[0] !== 0){
	      current = firstzerovariant[0];
	      rowsorter(i);
          columnsorter(j);
              blocksorter(i, j);
            if (rowelement != true && columnelement != true && blockelement != true)
              {
                sudoku[i][j] = firstzerovariant[0];
        numbers[firstzerovariant[0]]--;
        if (numbers[firstzerovariant[0]] === 0)
        delete numbers[firstzerovariant[0]];
              }
        
      }
  }
}
}
  for (let i = 6; i<=8; i++){
    for (let j =6; j<=8; j++){
      if (sudoku[i][j] !== 0)
      blockvariants[i][j].push(0)
      if (sudoku[i][j] === 0){
        for (let a = 1; a < 10; a++)
          {
            if (numbers[a])
            {
              current = a;
              rowsorter(i);
              columnsorter(j);
              blocksorter(i, j);
            if (rowelement != true && columnelement != true && blockelement != true)
              {
                blockvariants[i][j].push(current);
              }
            }
          }
      }
    }
  }
  for (let i = 6; i<=8; i++){
  for (let j =6; j<=8; j++){
    if (blockvariants[i][j][0] !== 0){
      firstzerovariant = blockvariants[i][j];
      for (let a = 6; a<=8; a++){
        for (let b =6; b<=8; b++){
          if ((a !== i && b !== j) || (a !== i && b === j) || (a === i && b !== j)){
            if (blockvariants[a][b][0] !== 0){
              enotherzerovariant = blockvariants[a][b];
              Difference(firstzerovariant, enotherzerovariant)
            }
          }
        }
      }
      if (firstzerovariant.length === 1 && firstzerovariant[0] !== 0){
	      current = firstzerovariant[0];
	      rowsorter(i);
          columnsorter(j);
              blocksorter(i, j);
            if (rowelement != true && columnelement != true && blockelement != true)
              {
                sudoku[i][j] = firstzerovariant[0];
        numbers[firstzerovariant[0]]--;
        if (numbers[firstzerovariant[0]] === 0)
        delete numbers[firstzerovariant[0]];
              }
        
      }
      
  }
}
}
counter++;
if (isEmpty(numbers) === false && counter <= 10)
{
	
	solveSudoku()
}
};
  function Difference(A,B)
{
    var M=A.length, N=B.length, C=[];
    for (var i=0; i<M; i++)
     { var j=0, k=0;
       while (B[j]!==A[i] && j<N) j++;
       while (C[k]!==A[i] && k<C.length) k++;
       if (j==N && k==C.length) C[C.length]=A[i];
     }
   return firstzerovariant = C;
}

function solveSudoku() {
  for (i = 0; i < sudoku.length; i++)
  {
    for (j = 0; j < sudoku[i].length; j++)
    {
      if (sudoku[i][j] === 0)
      { variants = [];
        for (let a = 1; a < 10; a++)
        {
          if (numbers[a])
          {
            current = a;
            rowsorter(i);
            columnsorter(j);
            blocksorter(i, j);
            if (rowelement != true && columnelement != true && blockelement != true)
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
  counter++;
if (isEmpty(numbers) === false && counter <= 10)
{
	
	blocksolver()
}

};
blocksolver()


  return sudoku;

}
