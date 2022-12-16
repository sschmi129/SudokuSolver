let inputImageElement = document.getElementById('inputImage');
let imagePlaceholder = document.getElementById('imagePlaceholder');

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

let sudokuSolverFunction = (image, blurValue, thresholdAlgoValue, thresholdType) => {


    const blurSelector = {
        0: cv.BORDER_CONSTANT,
        1: cv.BORDER_REPLICATE,
        2: cv.BORDER_REFLECT,
        3: cv.BORDER_WRAP,
        4: cv.BORDER_REFLECT_101,
        5: cv.BORDER_TRANSPARENT,
        6: cv.BORDER_REFLECT101,
        7: cv.BORDER_DEFAULT,
        8: cv.BORDER_ISOLATED,
    }

    const thresholdAlgoSelector = {
        0: cv.ADAPTIVE_THRESH_MEAN_C,
        1: cv.ADAPTIVE_THRESH_GAUSSIAN_C,
    }

    const thresholdTypes = {
        0: cv.THRESH_BINARY,
        1: cv.THRESH_BINARY_INV
    }

    let originalImage = cv.imread(image);
    let showPictureOnWebsite = new cv.Mat(); // not used for any further editing
    let reducedSize = new cv.Mat();
    let greyImage = new cv.Mat();
    let bluredImage = new cv.Mat();
    let blur2 = new cv.Mat();
    let threshold = new cv.Mat();
    let threshold2 = new cv.Mat();



    console.log("blurvalue: " + blurValue);



    cv.cvtColor(originalImage, greyImage, cv.COLOR_RGBA2GRAY, 0);
    cv.resize(greyImage, reducedSize, new cv.Size(450, 450), 0, 0, cv.INTER_AREA);

    cv.GaussianBlur(reducedSize, bluredImage, new cv.Size(3, 3), 0, 0, blurSelector[blurValue]);
    // cv.GaussianBlur(reducedSize, blur2, new cv.Size(3, 3), 0, 0, blurSelector[blurValue]);
    // cv.GaussianBlur(reducedSize, bluredImage, new cv.Size(3, 3), 0, 0, cv.BORDER_DEFAULT);
    // cv.GaussianBlur(reducedSize, blur2, new cv.Size(3, 3), 0, 0, cv.BORDER_DEFAULT);

    cv.adaptiveThreshold(bluredImage, threshold, 255, thresholdAlgoSelector[thresholdAlgoValue], thresholdTypes[1], 11, 16);
    cv.adaptiveThreshold(reducedSize, threshold2, 255, thresholdAlgoSelector[thresholdAlgoValue], thresholdTypes[thresholdType], 11, 16);
    // cv.adaptiveThreshold(originalImage, threshold2, 255, thresholdAlgoSelector[thresholdAlgoValue], thresholdTypes[thresholdType], 11, 16);
    // cv.adaptiveThreshold(bluredImage, threshold, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY_INV, 11, 16);
    // cv.adaptiveThreshold(reducedSize, threshold2, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY, 11, 16);

    let contours = new cv.MatVector();
    let hierarchy = new cv.Mat();
    let dst = cv.Mat.zeros(reducedSize.cols, reducedSize.rows, cv.CV_8UC3);
    cv.findContours(threshold, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);


    let x = main_outline(contours);
    biggest = x[0];
    max_area = x[1];
    j = x[2];
    console.log(biggest);
    console.log(max_area);
    console.log(j);

    cv.drawContours(dst, contours, j, new cv.Scalar(0, 255, 0), 1, cv.LINE_4, hierarchy, 100);

    let points_new = reframe(biggest)
    let tmp = [];
    let tmpTest = [];
    for (let i = 0, j = 0; i < points_new.length; i++, j = j + 2) {
        let k = 0;
        tmp[j] = points_new[i][k];
        tmp[j + 1] = points_new[i][k + 1];

        //Test
        tmpTest[j] = parseInt(points_new[i][k] * originalImage.size().width / reducedSize.size().width);
        tmpTest[j + 1] = parseInt(points_new[i][k + 1] * originalImage.size().height / reducedSize.size().height);
    }

    console.log("originalImage: ");
    console.log(originalImage.size().height); //works
    console.log("tmpTest");
    console.log(tmpTest);

    widthA = Math.sqrt((Math.pow((tmpTest[0] - tmpTest[2]), 2)) + ((Math.pow(tmpTest[1] - tmpTest[3]), 2)))
    widthB = Math.sqrt((Math.pow((tmpTest[4] - tmpTest[6]), 2)) + ((Math.pow(tmpTest[5] - tmpTest[7]), 2)))
    maxWidth = Math.max(widthA, widthB)


    heightA = Math.sqrt((Math.pow((tmpTest[0] - tmpTest[4]), 2)) + ((Math.pow(tmpTest[1] - tmpTest[5]), 2)))
    heightB = Math.sqrt((Math.pow((tmpTest[2] - tmpTest[6]), 2)) + ((Math.pow(tmpTest[3] - tmpTest[7]), 2)))
    maxHeight = Math.max(heightA, heightB)



    console.log(widthA);
    console.log(widthB);
    console.log(heightA);
    console.log(heightB);

    // heightA = np.sqrt(((tr[0] - br[0]) ** 2) + ((tr[1] - br[1]) ** 2))
    // heightB = np.sqrt(((tl[0] - bl[0]) ** 2) + ((tl[1] - bl[1]) ** 2))
    // maxHeight = max(int(heightA), int(heightB))





    // let srcTri = cv.matFromArray(4, 1, cv.CV_32FC2, tmp);
    let srcTri = cv.matFromArray(4, 1, cv.CV_32FC2, tmpTest); //TestImage
    // let dstTri = cv.matFromArray(4, 1, cv.CV_32FC2, [0, 0, 450, 0, 0, 450, 450, 450]);
    // let dstTri = cv.matFromArray(4, 1, cv.CV_32FC2, [0, 0, originalImage.size().height, 0, 0, originalImage.size().height, originalImage.size().height, originalImage.size().height])
    let dstTri = cv.matFromArray(4, 1, cv.CV_32FC2, ([0, 0, maxWidth - 1, 0, maxWidth - 1, maxHeight - 1, 0, maxHeight - 1]))
    let M = cv.getPerspectiveTransform(srcTri, dstTri);

    // cv.warpPerspective(threshold2, dst, M, new cv.Size(reducedSize.rows, reducedSize.cols), cv.INTER_NEAREST, cv.BORDER_REPLICATE, new cv.Scalar());
    cv.warpPerspective(greyImage, dst, M, new cv.Size(maxWidth, maxHeight), cv.INTER_NEAREST, cv.BORDER_REPLICATE, new cv.Scalar())

    cv.GaussianBlur(dst, dst, new cv.Size(3, 3), 0, 0, blurSelector[blurValue]);
    cv.adaptiveThreshold(dst, dst, 255, thresholdAlgoSelector[thresholdAlgoValue], thresholdTypes[0], 11, 16);

    // show cropped image in canvaselement 'canvasOutput' 
    // cv.imshow('canvasOutput', dst);



    let arrayDst = dst.data;
    let tmp2 = [];
    for (let i = 0; i < arrayDst.length; i++) {
        tmp2[i] = arrayDst[i]
    }

    let tileArray = sudokuGridBorderForOCR(dst);

    showPictureOnWebsite = dst.clone();

    // cv.rectangle(dst, [20, 30], [50, 60], [255,0,0], 2)

    // let rect = new cv.Rect(100, 100, 200, 200);
    // dst = dst.roi(rect);

    // cv.rectangle(dst, new cv.Point(30, 30), new cv.Point(60, 60), [0, 0, 255, 255], 1);

    for (let i = 0; i < tileArray.length; i++) {
        cv.rectangle(showPictureOnWebsite, new cv.Point(tileArray[i].left, tileArray[i].top), new cv.Point(tileArray[i].left + tileArray[i].width, tileArray[i].top + tileArray[i].height), [0, 255, 255, 255], 1);
    }

    cv.imshow('canvasOutput', dst);

    cv.imshow('canvasOutput2', showPictureOnWebsite)

    // cv.imshow('Output', dst)


    console.log("after images showing");

    // let values = [];
    let OCRImage = document.getElementById("canvasOutput2").toDataURL();
    // let OCRImage = document.getElementById("OCRImage").toDataURL();

    console.log("before OCRinit");
    const scheduler = Tesseract.createScheduler();


    console.log("after OCRinit");
    let promiseArray = [];
    (async () => {
        const OCRWorker1 = await Tesseract.createWorker();
        const OCRWorker2 = await Tesseract.createWorker();
        const OCRWorker3 = await Tesseract.createWorker();
        await scheduler.addWorker(OCRWorker1, OCRWorker2, OCRWorker3);
        // await OCRWorker1.load();
        await OCRWorker1.loadLanguage('eng');
        await OCRWorker1.initialize('eng');
        // await OCRWorker2.load();
        await OCRWorker2.loadLanguage('eng');
        await OCRWorker2.initialize('eng');
        // await OCRWorker3.load();
        await OCRWorker3.loadLanguage('eng');
        await OCRWorker3.initialize('eng');
        console.log("enter async");
        for (let i = 0; i < tileArray.length; i++) {
            // const { data: { text } } = await OCRWorker1.recognize(OCRImage, { rectangle: tileArray[i] });
            // console.log("Tile " + (i + 1) + ":  " + text);
            // const { data: { text } } = scheduler.addJob('recognize', OCRImage, { rectangle: tileArray[i] });
            promiseArray.push(scheduler.addJob('recognize', OCRImage, { rectangle: tileArray[i] }))

            console.log(Promise);
            // console.log("whats up");
            // const values = await Promise.all(rectangles.map((rectangle) => (
            //     scheduler.addJob('recognize', 'https://tesseract.projectnaptha.com/img/eng_bw.png', { rectangle })
            //   )));
            // values.push({
            //     tileNumber: i,
            //     text: text
            // });
        }

        let resultsOfOCR = await Promise.all(promiseArray);
        console.log(resultsOfOCR);
        // for
        for (let i = 0; i < resultsOfOCR.length; i++) {
            let x = resultsOfOCR[i];
            values.push({
                tileNumber: i,
                text: x.data.text,
            }
            )
        }

        function compareFn(a, b) {
            if (a.tileNumber < b.tileNumber) {
                return -1;
            }
            if (a.tileNumber > b.tileNumber) {
                return 1;
            }
            // a must be equal to b
            return 0;
        }

        values.sort(compareFn);

        console.log("aaasssdddd");
        console.log(values);

        let possibleValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = 0; i < values.length; i++) {
            if (values[i].text === null) {
                values[i].text = 0;
            }
            values[i].text = +values[i].text.replace(/[^.\d]/g, '');
            if (!possibleValues.includes(values[i].text)) {
                values[i].text = 0;
            }
        }


        for (let i = 0; i < values.length; i++) {
            if (values[i].text !== 0) {
                let x = document.getElementById(`box${values[i].tileNumber}`);
                x.innerHTML = values[i].text;
            }
        }

        for (let i = 0; i < values.length; i++) {
            let row = parseInt(i / 9);
            let column = i % 9;
            valuesMatrix[row][column] = values[i].text;
        }


        let solveButton = document.createElement('button');
        solveButton.innerHTML = "Solve";
        solveButton.id = "SudokuSolveButton"
        solveButton.addEventListener('click', (e) => {
            
            valuesMatrix = solveSudoku(valuesMatrix);

            for (let i = 0; i < valuesMatrix.length; i++) {
                for (let j = 0; j < valuesMatrix[i].length; j++) {
                    
                    let ij = i*9 + j;
                    let x = document.getElementById(`box${ij}`);
                    x.innerHTML = valuesMatrix[i][j];
                }
            }
        });
        const sudokuGrid = document.getElementById("sudokuGrid");
        sudokuGrid.appendChild(solveButton);

        //from here solving

        // let arrayToStringSudoku = '';
        // for (let i = 0; i < values.length; i++) {
        //     arrayToStringSudoku += values[i].text;
        // }
        // console.log(arrayToStringSudoku);
        // let options = {
        //     emptyValue: '0',
        //     hintCheck: true,
        //     outputArray: true,
        //     // maxIterations: 1<<20,
        //     maxIterations: 20,
        // };
        // let solvedSudoku = solve(arrayToStringSudoku, options);
        // console.log(solvedSudoku);

        // for (let i = 0; i < solvedSudoku.length; i++) {
        //     let x = document.getElementById(`box${i}`);
        //     x.innerHTML = solvedSudoku[i];
        // }

        await scheduler.terminate();
    }
    )();


    // const worker = Tesseract.createWorker({
    //     tessedit_char_whitelist: '0123456789',
    // });
    // (async () => {
    //     await worker.load();
    //     await worker.loadLanguage('eng');
    //     await worker.initialize('eng');

    //     // for (let i = 0; i < rectangles.length; i++) {
    //     //     const { data: { text } } = await worker.recognize(croppedImage, { rectangle: rectangles[i] });
    //     //     values.push(text);
    //     // }

    //     for (let i = 0; i < tileArray.length; i++) {
    //         const { data: { text } } = await worker.recognize(OCRImage, { rectangle: tileArray[i] });
    //         // console.log("Tile " + (i + 1) + ":  " + text);
    //         values.push({
    //             tileNumber: i,
    //             text: text
    //         });
    //     }

    //     // let testValues = [];
    //     // promiseX = Promise(OCRWorker(tileArray, testValues, 1))
    //     // console.log("testValues");
    //     // console.log(testValues);

    //     function compareFn(a, b) {
    //         if (a.tileNumber < b.tileNumber) {
    //             return -1;
    //         }
    //         if (a.tileNumber > b.tileNumber) {
    //             return 1;
    //         }
    //         // a must be equal to b
    //         return 0;
    //     }


    //     // let promiseList = [];
    //     // for (let i = 0; i < tileArray.length; i++) {
    //     //     const tempPromise = new Promise(() => {
    //     //         const { data: { text } } = worker.recognize(OCRImage, { rectangle: tileArray[i] });
    //     //         values.push({
    //     //             tileNumber: i,
    //     //             text: text
    //     //         });
    //     //     }
    //     //     )
    //     //     promiseList.push(tempPromise);
    //     // }

    //     // await Promise.all(promiseList);

    //     // console.log("After Promise");

    //     values.sort(compareFn);

    //     console.log("aaasssdddd");
    //     console.log(values);

    //     let possibleValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    //     for (let i = 0; i < values.length; i++) {
    //         if (values[i].text === null) {
    //             values[i].text = 0;
    //         }
    //         values[i].text = +values[i].text.replace(/[^.\d]/g, '');
    //         if (!possibleValues.includes(values[i].text)) {
    //             values[i].text = 0;
    //         }
    //     }
    //     console.log(values);

    //     for (let i = 0; i < values.length; i++) {
    //         if (values[i].text !== 0) {
    //             let x = document.getElementById(`box${values[i].tileNumber}`);
    //             x.innerHTML = values[i].text;
    //         }

    //     }

    //     let arrayToStringSudoku = '';
    //     for (let i = 0; i < values.length; i++) {
    //         arrayToStringSudoku += values[i].text;
    //     }
    //     console.log(arrayToStringSudoku);
    //     let options = {
    //         emptyValue: '0',
    //         hintCheck: true,
    //         outputArray: true,
    //         // maxIterations: 1<<20,
    //         maxIterations: 20,
    //     };
    //     let solvedSudoku = solve(arrayToStringSudoku, options);
    //     console.log(solvedSudoku);

    //     for (let i = 0; i < solvedSudoku.length; i++) {
    //         let x = document.getElementById(`box${i}`);
    //         x.innerHTML = solvedSudoku[i];
    //     }
    //     // parseNum = str => +str.replace(/[^.\d]/g, '');

    //     await worker.terminate();
    // })();

    console.log("after async");

    originalImage.delete();
    reducedSize.delete();
    greyImage.delete();
    bluredImage.delete();
    blur2.delete();
    threshold.delete();
    threshold2.delete();
}

const lableCreater = (forValue, innerHTMLValue) => {
    const rangeDescription = document.createElement('label');
    rangeDescription.for = forValue;
    rangeDescription.innerHTML = innerHTMLValue;
    return rangeDescription;
}

const divCreator = () => {
    return document.createElement('div');
}

let testSolveButton = document.getElementById('testSolveButton');
testSolveButton.addEventListener('click', (e) => {
    let blurValue = document.getElementById('blurSelectorTest');
    let image = document.getElementById('testImage');
    console.log(blurValue);
    let thresholdAlgoValue = 0;
    let thresholdType = document.getElementById('thresholdTypeSelectorTest');
    console.log("thresholdType");
    console.log(thresholdType);
    sudokuSolverFunction(image, blurValue.value, thresholdAlgoValue, thresholdType.value);
}, false);

inputImageElement.addEventListener('input', (e) => {
    const image = document.createElement('img');
    const solveButton = document.createElement('button');
    // const blurSelector = document.createElement('input');
    const thresholdAlgoSelector = document.createElement('input');

    image.src = URL.createObjectURL(e.target.files[0]);
    image.id = 'inputImage';
    imagePlaceholder.appendChild(image);


    // blurSelector.id = 'blurSelector';
    // blurSelector.type = 'range';
    // blurSelector.min = 0;
    // blurSelector.max = 8;
    // blurSelector.value = 7;
    // let options

    let blurOptionArray = {
        0: 'BORDER_CONSTANT',
        1: 'BORDER_REPLICATE',
        2: 'BORDER_REFLECT',
        3: 'BORDER_WRAP',
        4: 'BORDER_REFLECT_101',
        5: 'BORDER_TRANSPARENT',
        6: 'BORDER_REFLECT101',
        7: 'BORDER_DEFAULT',
        8: 'BORDER_ISOLATED',
    }

    let blurSelector = document.createElement('select');
    for (let i = 0; i < Object.keys(blurOptionArray).length; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = blurOptionArray[i];
        console.log("now follows option");
        console.log(option);
        blurSelector.appendChild(option);
    }
    // blurSelector.get
    blurSelector.id = 'blurSelector';
    blurSelector.className = 'blurSelector';

    let thresholdTypeSelector = document.createElement('select');
    thresholdTypeSelector.id = 'thresholdTypeSelector';
    let option1 = document.createElement("option");
    option1.value = 0;
    option1.text = 'THRESH_BINARY';
    thresholdTypeSelector.appendChild(option1);

    let option2 = document.createElement("option");
    option2.value = 1;
    option2.text = 'THRESH_BINARY_INV';
    thresholdTypeSelector.appendChild(option2);



    // thresholdAlgoSelector.id = 'thresholdAlgoSelector';
    // thresholdAlgoSelector.type = 'range';
    // thresholdAlgoSelector.min = 0;
    // thresholdAlgoSelector.max = 1;
    // thresholdAlgoSelector.value = 1;
    // imagePlaceholder.appendChild(thresholdAlgoSelector);
    // imagePlaceholder.appendChild(lableCreater('thresholdAlgoSelector', 'Threshold Algorithms'));


    solveButton.innerHTML = 'Recognize';
    solveButton.id = 'solveButton';
    solveButton.addEventListener('click', (e) => {
        let blurValue = document.getElementById('blurSelector');
        console.log(blurValue);
        let thresholdAlgoValue = 0;
        let thresholdType = document.getElementById('thresholdTypeSelector');
        console.log("thresholdType");
        console.log(thresholdType);
        sudokuSolverFunction(image, blurValue.value, thresholdAlgoValue, thresholdType.value);
    }, false);

    let paragraph = document.createElement('p');
    paragraph.innerHTML = "Recognize the outer rectangle of sudoku. Cut out from the rest of the image."

    // imagePlaceholder.appendChild(lableCreater('blurSelector', 'Blur'));
    imagePlaceholder.appendChild(blurSelector);
    imagePlaceholder.appendChild(thresholdTypeSelector);
    imagePlaceholder.appendChild(solveButton);


}, false);


// const solveSudoku = () => {
//     let arrayToStringSudoku = '';
//     for (let i = 0; i < values.length; i++) {
//         arrayToStringSudoku += values[i].text;
//     }
//     console.log(arrayToStringSudoku);
//     let options = {
//         emptyValue: '0',
//         hintCheck: true,
//         outputArray: true,
//         // maxIterations: 1<<20,
//         maxIterations: 30,
//     };
//     let solvedSudoku = solve(arrayToStringSudoku, options);
//     console.log(solvedSudoku);

//     for (let i = 0; i < solvedSudoku.length; i++) {
//         let x = document.getElementById(`box${i}`);
//         x.innerHTML = solvedSudoku[i];
//     }
// }

reframe = (biggest) => {
    let points = Array.from(biggest.data32S)

    let points2 = []
    for (let i = 0; i < points2.length; i++) {
        points2[i] = parseInt(points2[i], 10)
    }
    while (points.length) points2.push(points.splice(0, 2));

    //sum
    let add = [];
    for (let i = 0; i < points2.length; i++) {
        let j = 0;
        add.push(points2[i][j] + points2[i][j + 1]);
    }

    let diff = []
    for (let i = 0; i < points2.length; i++) {
        let j = 0
        diff.push(points2[i][j + 1] - points2[i][j]);
    }

    let points_new = [[0, 0], [0, 0], [0, 0], [0, 0]];

    // points_new[0] = points2[argmin(add)]
    // points_new[3] = points2[argmax(add)]
    // points_new[1] = points2[argmin(diff)]
    // points_new[2] = points2[argmax(diff)]

    points_new[0] = points2[argmin(add)]
    points_new[2] = points2[argmax(add)]
    points_new[1] = points2[argmin(diff)]
    points_new[3] = points2[argmax(diff)]


    console.log(points_new[0]);
    console.log(points_new[3]);
    console.log(points_new[1]);
    console.log(points_new[2]);

    return points_new;
}

argmin = (array) => {
    let minDef;
    let minValue;
    for (let i = 0; i < array.length; i++) {
        if (minDef == undefined || minValue > array[i]) {
            minDef = i;
            minValue = array[i];
        }
    }
    return minDef;
}

argmax = (array) => {
    let maxDef;
    let maxValue;
    for (let i = 0; i < array.length; i++) {
        if (maxDef == undefined || maxValue < array[i]) {
            maxDef = i;
            maxValue = array[i];
        }
    }
    return maxDef;
}

main_outline = (contours) => {
    let biggest = new cv.Mat();
    let max_area = 0;
    let j = 0;
    for (let i = 0; i < contours.size(); i++) {
        let area = cv.contourArea(contours.get(i), false)
        if (area > 50) {
            let peri = cv.arcLength(contours.get(i), true)
            let approx = new cv.Mat();
            cv.approxPolyDP(contours.get(i), approx, 0.02 * peri, true)
            if (area > max_area && approx.matSize[0] == 4) {
                j = i
                biggest = approx;
                max_area = area;
            }
        }

    }
    return [biggest, max_area, j]
}

function onOpenCvReady() {
    document.getElementById('status').innerHTML = 'OpenCV.js is ready.';
}

// onClickListener for Sudoku Grid. Correction for false recognition of number
const numberCorrection = (e) => {
    console.log("e: ");
    console.log(e);
    console.log(e.target.innerHTML);

    let tileNumber = parseInt((e.target.id).replace(/\D/g, ''))

    if (e.target.innerHTML === "") {
        values[tileNumber].tileNumber = tileNumber;
        values[tileNumber].text = 1;

        let row = parseInt(tileNumber / 9);
        let column = tileNumber % 9;
        valuesMatrix[row][column] = 1;

        e.target.innerHTML = 1;
        return;
    }
    if (parseInt(e.target.innerHTML) + 1 < 10) {
        // values[e.target.id] = parseInt(e.target.innerHTML) + 1;

        values[tileNumber].tileNumber = tileNumber;
        values[tileNumber].text = parseInt(e.target.innerHTML) + 1;

        let row = parseInt(tileNumber / 9);
        let column = tileNumber % 9;
        valuesMatrix[row][column] = parseInt(e.target.innerHTML) + 1;

        e.target.innerHTML = parseInt(e.target.innerHTML) + 1;
        return;
    }
    if (parseInt(e.target.innerHTML) + 1 >= 10) {
        values[tileNumber].tileNumber = tileNumber;
        values[tileNumber].text = 0;

        let row = parseInt(tileNumber / 9);
        let column = tileNumber % 9;
        valuesMatrix[row][column] = 0;

        e.target.innerHTML = "";
        return;
    }
} 