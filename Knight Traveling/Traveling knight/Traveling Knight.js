function getKnightMoves(p, q, n) {
    var mat = new Array(n).fill(0).map(() => new Array(n).fill(0));

    var possibleValues = [];
    // All possible moves of a knight
    var X = [2, 1, -1, -2, -2, -1, 1, 2];
    var Y = [1, 2, 2, 1, -1, -2, -2, -1];

    // Check if each possible move is correct or not
    for (var i = 0; i < 8; i++) {

        // Position of knight after move
        var x = p + X[i];
        var y = q + Y[i];

        // check valid moves
        if (x >= 0 && y >= 0 && x < n && y < n
            && mat[x][y] == 0) {
            console.log('x = ' + x + ' y = ' + y);
            console.log('......');
            possibleValues.push({ x, y })

        }
    }

    return { possibleValues: possibleValues };
}

console.log(getKnightMoves(1, 4, 8))    

