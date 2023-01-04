function reframe(biggest) {
    let edges_one_dimensional = Array.from(biggest.data32S);

    let edges = []; // [[][][][]]

    console.log("edges_one_dimensional");
    console.log(edges_one_dimensional);
    while (edges_one_dimensional.length) {
        edges.push(edges_one_dimensional.splice(0, 2));
    }
    console.log("edges");
    console.log(edges);

    //sum
    let sum = [];
    for (let i = 0; i < edges.length; i++) {
        // let j = 0;
        sum.push(edges[i][0] + edges[i][1]);
    }

    let diff = []
    for (let i = 0; i < edges.length; i++) {
        // let j = 0;
        diff.push(edges[i][1] - edges[i][0]);
    }

    let edges_final = [[0, 0], [0, 0], [0, 0], [0, 0]];
    edges_final[0] = edges[argmin(sum)];
    edges_final[2] = edges[argmax(sum)];
    edges_final[1] = edges[argmin(diff)];
    edges_final[3] = edges[argmax(diff)];

    return edges_final;
}

function argmin(array) {
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

function argmax(array) {
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

function main_outline(contours) {
    let biggestContour = new cv.Mat();
    let max_area = 0;
    let contourIndex = -1;
    for (let i = 0; i < contours.size(); i++) {
        const area = cv.contourArea(contours.get(i), false);
        if (area > 50) {
            const peri = cv.arcLength(contours.get(i), true);
            let approx = new cv.Mat();
            cv.approxPolyDP(contours.get(i), approx, 0.02 * peri, true);
            if (area > max_area && approx.matSize[0] === 4) {
                console.log("approx.matSize[0]");
                console.log(approx.matSize[0]);
                contourIndex = i;
                biggestContour = approx;
                max_area = area;
            }
        }
    }

    return [biggestContour, max_area, contourIndex]
}

function compareFn(a, b) {
    if (a.tileNumber < b.tileNumber) {
        return -1;
    }
    if (a.tileNumber > b.tileNumber) {
        return 1;
    }
    return 0;
}