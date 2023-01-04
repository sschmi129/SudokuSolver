const inputImageElement = document.getElementById('inputImage');
const imagePlaceholder = document.getElementById('imagePlaceholder');

let values = [];
let valuesMatrix =
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

let tileBorderArray = "";

let clickedOnRecognize = false;
let clickedOnRecognizeNumber = false;
let clickedOnSolve = false;


//init tesseract even before the usage for faster recognition
let tesseractReady = false;
const scheduler = Tesseract.createScheduler();
(async () => {
    console.log("schedulerAsync");
    const OCRWorker1 = await Tesseract.createWorker();
    const OCRWorker2 = await Tesseract.createWorker();
    const OCRWorker3 = await Tesseract.createWorker();
    const OCRWorker4 = await Tesseract.createWorker();

    await OCRWorker1.loadLanguage('eng');
    await OCRWorker1.initialize('eng');

    await OCRWorker2.loadLanguage('eng');
    await OCRWorker2.initialize('eng');

    await OCRWorker3.loadLanguage('eng');
    await OCRWorker3.initialize('eng');

    await OCRWorker4.loadLanguage('eng');
    await OCRWorker4.initialize('eng');

    await scheduler.addWorker(OCRWorker1, OCRWorker2, OCRWorker3, OCRWorker4);

    tesseractReady = true;
})();


function recognizeSudokuGrid(image) {

    let originalImage = cv.imread(image);
    let tesseractBorderImage = new cv.Mat(); // not used for any further editing
    let reducedSizeImage = new cv.Mat();
    let greyImage = new cv.Mat();
    let bluredImage = new cv.Mat();
    let thresholdImage = new cv.Mat();
    
    // divide = cv.divide(gray, blur, scale=255)

    cv.cvtColor(originalImage, greyImage, cv.COLOR_RGBA2GRAY, 0);
    cv.resize(greyImage, reducedSizeImage, new cv.Size(450, 450), 0, 0, cv.INTER_AREA);

    cv.GaussianBlur(reducedSizeImage, bluredImage, new cv.Size(3, 3), 0, 0, cv.BORDER_CONSTANT);

    cv.adaptiveThreshold(bluredImage, thresholdImage, 255, cv.ADAPTIVE_THRESH_MEAN_C, cv.THRESH_BINARY_INV, 11, 16);

    const contours = new cv.MatVector();
    const hierarchy = new cv.Mat();
    const dst = cv.Mat.zeros(reducedSizeImage.cols, reducedSizeImage.rows, cv.CV_8UC3);
    cv.findContours(thresholdImage, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);


    
    const biggestContourArray = main_outline(contours);
    //Biggest contour with 4 edges
    const biggestContour = biggestContourArray[0];


    let mainDiv = document.getElementById('mainDiv');

    console.log("biggestContourArray[2]");
    console.log(biggestContourArray[2]);
    //no contour with 4 corners
    if(biggestContourArray[2] === -1){
        console.log("no 4 corners");
        mainDiv.insertAdjacentHTML('beforeend', noContourFound);
        return;
    }

    mainDiv.insertAdjacentHTML('beforeend', canvasPlaceholder);

    cv.drawContours(dst, contours, -1, new cv.Scalar(0, 255, 0), 1, cv.LINE_4, hierarchy, 100);

    const edges = reframe(biggestContour);
    let tmp = [];
    for (let i = 0, j = 0; i < edges.length; i++, j = j + 2) {
        tmp[j] = parseInt(edges[i][0] * originalImage.size().width / reducedSizeImage.size().width);
        tmp[j + 1] = parseInt(edges[i][1] * originalImage.size().height / reducedSizeImage.size().height);
    }
    console.log("tmp");
    console.log(tmp);
    console.log("/tmp");

    const widthA = Math.sqrt((Math.pow((tmp[0] - tmp[2]), 2)) + ((Math.pow(tmp[1] - tmp[3]), 2)));
    const widthB = Math.sqrt((Math.pow((tmp[4] - tmp[6]), 2)) + ((Math.pow(tmp[5] - tmp[7]), 2)));
    const maxWidth = Math.max(widthA, widthB);

    const heightA = Math.sqrt((Math.pow((tmp[0] - tmp[4]), 2)) + ((Math.pow(tmp[1] - tmp[5]), 2)));
    const heightB = Math.sqrt((Math.pow((tmp[2] - tmp[6]), 2)) + ((Math.pow(tmp[3] - tmp[7]), 2)));
    const maxHeight = Math.max(heightA, heightB);

    const srcTri = cv.matFromArray(4, 1, cv.CV_32FC2, tmp);
    const dstTri = cv.matFromArray(4, 1, cv.CV_32FC2, ([0, 0, maxWidth - 1, 0, maxWidth - 1, maxHeight - 1, 0, maxHeight - 1]));
    const M = cv.getPerspectiveTransform(srcTri, dstTri);

    cv.warpPerspective(greyImage, dst, M, new cv.Size(maxWidth, maxHeight), cv.INTER_NEAREST, cv.BORDER_REPLICATE, new cv.Scalar());

    cv.GaussianBlur(dst, dst, new cv.Size(3, 3), 0, 0, cv.BORDER_DEFAULT);
    cv.adaptiveThreshold(dst, dst, 255, cv.ADAPTIVE_THRESH_MEAN_C, cv.THRESH_BINARY, 11, 16);


    tesseractBorderImage = dst.clone();

    tileBorderArray = sudokuGridBorderForOCR(tesseractBorderImage);

    cv.cvtColor(tesseractBorderImage, tesseractBorderImage, cv.COLOR_GRAY2RGB, 0);

    for (let i = 0; i < tileBorderArray.length; i++) {
        cv.rectangle(tesseractBorderImage, new cv.Point(tileBorderArray[i].left, tileBorderArray[i].top), new cv.Point(tileBorderArray[i].left + tileBorderArray[i].width, tileBorderArray[i].top + tileBorderArray[i].height), /*[0, 255, 255, 255]*/new cv.Scalar(0, 255, 0, 255), 2, cv.BORDER_CONSTANT, 0);
    }

    //show cropped image
    cv.imshow('croppedImageCanvas', dst);

    //show border for tesseract.js
    cv.imshow('numberBoxCanvas', tesseractBorderImage);


    originalImage.delete();
    reducedSizeImage.delete();
    greyImage.delete();
    bluredImage.delete();
    // bluredImage2.delete();
    thresholdImage.delete();
    // thresholdImage2.delete();
}


function recognizeNumber() {

    const OCRImage = document.getElementById("croppedImageCanvas").toDataURL();

    const promiseArray = [];

    (async () => {

        for (let i = 0; i < tileBorderArray.length; i++) {
            promiseArray.push(scheduler.addJob('recognize', OCRImage, { rectangle: tileBorderArray[i] }));
        }

        const resultsOfOCR = await Promise.all(promiseArray);

        // for
        for (let i = 0; i < resultsOfOCR.length; i++) {
            values.push({
                tileNumber: i,
                text: resultsOfOCR[i].data.text,
            }
            )
        }

        values.sort(compareFn);

        const possibleValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = 0; i < values.length; i++) {
            if (values[i].text === null) {
                values[i].text = 0;
            }
            values[i].text = + values[i].text.replace(/[^.\d]/g, '');
            if (!possibleValues.includes(values[i].text)) {
                values[i].text = 0;
            }
        }


        for (let i = 0; i < values.length; i++) {
            if (values[i].text !== 0) {
                const x = document.getElementById(`box${values[i].tileNumber}`);
                x.innerHTML = values[i].text;
            }
        }

        for (let i = 0; i < values.length; i++) {
            const row = parseInt(i / 9);
            const column = i % 9;
            valuesMatrix[row][column] = values[i].text;
        }

        // await scheduler.terminate();
    }
    )();
}

// *** Various EventListener ***

function inputImageListener(event) {

    if(clickedOnRecognize){
        tileBorderArray = "";
        values = [];
        for (let i = 0; i < valuesMatrix.length; i++) {
            valuesMatrix[i].fill(0);
        }
        document.getElementById('canvasPlaceholder').remove();

        if(clickedOnRecognizeNumber){
            document.getElementById('sudokuGridSection').remove();
        }
        clickedOnRecognize = false;
        clickedOnRecognizeNumber = false;
        clickedOnSolve = false;
    }

    console.log(valuesMatrix);

    const imgElement = document.getElementById('sudokuImage');

    imgElement.src = URL.createObjectURL(event.target.files[0]);
    imgElement.id = 'sudokuImage';

}

function recognizeSudokuGridButtonListener(event) {
    if (clickedOnRecognize) {
        return;
    }
    clickedOnRecognize = true;

    const image = document.getElementById('sudokuImage');

    recognizeSudokuGrid(image);
}

function recognizeNumberButtonListener(event) {
    if (!tesseractReady || clickedOnRecognizeNumber) {
        return;
    }
    clickedOnRecognizeNumber = true;

    let mainDiv = document.getElementById('mainDiv');
    mainDiv.insertAdjacentHTML('beforeend', sudokuGridHTML);
    console.log("regButton");
    recognizeNumber();
}

function sudokuSolveButtonListener(event) {
    if (clickedOnSolve) {
        return;
    }
    clickedOnSolve = true;

    responseArray = solveSudoku(valuesMatrix);

    if(document.getElementById('noSolution') !== null){
        document.getElementById('noSolution').innerHTML = '';
    }
    
    if(responseArray[1] === true){
        valuesMatrix = responseArray[0];
        for (let i = 0; i < valuesMatrix[0].length; i++) {
            for (let j = 0; j < valuesMatrix[i].length; j++) {
    
                const ij = i * 9 + j;
                const x = document.getElementById(`box${ij}`);
                x.innerHTML = valuesMatrix[i][j];
            }
        }
    } else{
        if(document.getElementById('noSolution') !== null){
            clickedOnSolve = false;
            return;
        }
        let sudokuGridSection = document.getElementById('sudokuGridSectionBottom');
        sudokuGridSection.insertAdjacentHTML('beforeend', noSolution);
        clickedOnSolve = false;
    }


}


// onClickListener for Sudoku Grid. Correction for false recognition of number
function sudokuGridClickListener(event) {

    let tileNumber = parseInt((event.target.id).replace(/\D/g, ''))

    if (event.target.innerHTML === "") {
        values[tileNumber].tileNumber = tileNumber;
        values[tileNumber].text = 1;

        let row = parseInt(tileNumber / 9);
        let column = tileNumber % 9;
        valuesMatrix[row][column] = 1;

        event.target.innerHTML = 1;
        return;
    }
    if (parseInt(event.target.innerHTML) + 1 < 10) {
        // values[e.target.id] = parseInt(e.target.innerHTML) + 1;

        values[tileNumber].tileNumber = tileNumber;
        values[tileNumber].text = parseInt(event.target.innerHTML) + 1;

        let row = parseInt(tileNumber / 9);
        let column = tileNumber % 9;
        valuesMatrix[row][column] = parseInt(event.target.innerHTML) + 1;

        event.target.innerHTML = parseInt(event.target.innerHTML) + 1;
        return;
    }
    if (parseInt(event.target.innerHTML) + 1 >= 10) {
        values[tileNumber].tileNumber = tileNumber;
        values[tileNumber].text = 0;

        let row = parseInt(tileNumber / 9);
        let column = tileNumber % 9;
        valuesMatrix[row][column] = 0;

        event.target.innerHTML = "";
        return;
    }
}