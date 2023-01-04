let localSudokuGrid =
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]


const notOnce = (sudokuGrid, row, col, num) => {

    for (let i = 0; i < sudokuGrid.length; i++) {
        if (sudokuGrid[row][i] == num) {
            return false;
        }
    }

    for (let j = 0; j < sudokuGrid.length; j++) {
        if (sudokuGrid[j][col] == num) {
            return false;
        }
    }

    let boxRowStart = row - row % 3;
    let boxColStart = col - col % 3;

    for (let i = boxRowStart; i < boxRowStart + 3; i++) {
        for (let j = boxColStart; j < boxColStart + 3; j++) {
            if (sudokuGrid[i][j] == num) {
                return false;
            }
        }
    }

    return true;
}

const solveSudokuRec = (sudokuGrid) => {
    let n = sudokuGrid.length;
    let row = -1;
    let col = -1;
    let isEmpty = true;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (sudokuGrid[i][j] === 0) {
                row = i;
                col = j;

                isEmpty = false;
                break;
            }
        }
        if (!isEmpty) {
            break;
        }
    }

    if (isEmpty) {
        return true;
    }

    for (let num = 1; num <= n; num++) {
        if (notOnce(sudokuGrid, row, col, num)) {
            sudokuGrid[row][col] = num;
            if (solveSudokuRec(sudokuGrid)) {
                return true;
            }
            else {
                sudokuGrid[row][col] = 0;
            }
        }
    }
    return false;
}

const solveSudoku = (sudokuGrid) => {
    localSudokuGrid = [...sudokuGrid];
    let hints = 0;
    for (let i = 0; i < localSudokuGrid.length; i++) {
        for (let j = 0; j < localSudokuGrid[i].length; j++) {
            if(localSudokuGrid[i][j] !== 0){
                hints++;
            }
        }
        
        
    }

    if (hints < 17) {

        return [localSudokuGrid, false];
    }

    if(solveSudokuRec(localSudokuGrid)){
        console.log("recLog");
        console.log(localSudokuGrid);
        return [localSudokuGrid, true];
    } else{
        return [localSudokuGrid, false]
    }
    

    return localSudokuGrid;
}

// let sudokuGrid = [
//     [4, 0, 0, 0, 0, 0, 0, 0, 3],
//     [0, 5, 0, 2, 0, 1, 0, 4, 0],
//     [0, 0, 9, 0, 0, 0, 6, 0, 0],
//     [0, 9, 0, 0, 7, 0, 0, 2, 0],
//     [0, 0, 0, 6, 0, 5, 0, 0, 0],
//     [0, 1, 0, 0, 4, 0, 0, 3, 0],
//     [0, 0, 8, 0, 0, 0, 1, 0, 0],
//     [0, 3, 0, 5, 0, 2, 0, 7, 0],
//     [2, 0, 0, 0, 0, 0, 0, 0, 5]
// ];
// const sudokuString = "400000003050201040009000600090070020000605000010040030008000100030502070200000005"

// if (solveSudoku(sudokuGrid)) {
//     console.log(sudokuGrid);
// }
// else {
//     console.log("No solution");
// }