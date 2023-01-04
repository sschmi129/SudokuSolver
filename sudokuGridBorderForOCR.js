let sudokuGridBorderForOCR = (dst) => {
    const tileWidth = dst.size().width / 9;
    const tileHeight = dst.size().height / 9;

    const x = tileWidth * 0.14;
    const y = tileHeight * 0.13;

    const tile = (i) => {
        j = parseInt(i/9, 10);
        let top = parseInt(j*tileHeight, 10)
        return {
            left: parseInt(tileWidth*i%dst.size().width+x, 10),
            top: parseInt(top+y, 10),
            width: parseInt(tileWidth - 2*x, 10),
            height: parseInt(tileHeight - 2*y, 10)
        }
    }

    let tileArray = [];
    for (let i = 0; i < 81; i++) {
        tileArray.push(tile(i))
    }
    return tileArray;
}