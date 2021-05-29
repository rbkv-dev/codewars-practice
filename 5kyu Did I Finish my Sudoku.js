const validateLines = (board) => {
    return !board.some((line) => {
        return line.filter((v, i, a) => a.indexOf(v) === i).length !== 9;
    })
}

function doneOrNot(board) {
    let _board1 = [...board];

    if (!validateLines(_board1)) return "Try again!";

    // ---

    let _board2 = [];

    for (let i = 0; i < 9; i++) {
        let tmpLine = [];
        for (let j = 0; j < 9; j++) tmpLine.push(board[j][i]);
        _board2.push(tmpLine);
    }

    if (!validateLines(_board2)) return "Try again!";

    // ---

    let _board3 = [];

    for (let c = 0; c < 3; c++) {
        let area1 = [];
        let area2 = [];
        let area3 = [];
        for (let i = 0 + c*3; i < 3 + c*3; i++) {
            for (let j = 0; j < 9; j++) {
                if (j < 3) area1.push(board[i][j])
                else if (j < 6) area2.push(board[i][j])
                else area3.push(board[i][j])
            }
        }
        _board3.push(area1, area2, area3);
    }

    if (!validateLines(_board3)) return "Try again!";

    // ---

    return "Finished!";
}
