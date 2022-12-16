function OCRWorker(tileArray, testValues, row) {
    const worker = Tesseract.createWorker({
        tessedit_char_whitelist: '0123456789',
    });
    // let tileArrayLength;
    async () => {
        worker.load();
        worker.loadLanguage('eng');
        worker.initialize('eng');

        for (let i = row * 9; i < row * 9 + 8; i++) {
            const { data: { text } } = await worker.recognize(OCRImage, { rectangle: tileArray[i] });
            console.log("Tile " + (i + 1) + ":  " + text);
            testValues.push({
                tileNumber: i,
                text: text
            });
        }

        worker.terminate()
    }

    return testValues;

}

