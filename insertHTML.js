const canvasPlaceholder =
    `
<div id="canvasPlaceholder" class="canvasPlaceholder">
    <p>If the contures of the main border is detected,
        you can see the cropped image:</p>
    <canvas id="croppedImageCanvas"></canvas>
    <p>
        Here you can see boxes with green borders. This is what Tessaract.js looks at detecting the numbers:
    </p>
    <canvas id="numberBoxCanvas"></canvas>
    <button id="recognizeNumberButton" onClick="recognizeNumberButtonListener(event)">
        Recognize Number
    </button>
</div>
`

const noContourFound =
    `
<div class="canvasPlaceholder" id="canvasPlaceholder">
    Sudoku grid not found. Try take another picture or use other picture.
</div>
`

const sudokuGridHTML =
    `
<div class="sudokuGridSection" id="sudokuGridSection">
    <p>If everything works as intended, you can see the results down here:</p>
    <div class="sudokuGrid" id="sudokuGrid" onclick="sudokuGridClickListener(event)">
        <div class="box3x3">
            <div class="sudokuBox" id="box0"></div>
            <div class="sudokuBox" id="box1"></div>
            <div class="sudokuBox" id="box2"></div>
            <div class="sudokuBox" id="box9"></div>
            <div class="sudokuBox" id="box10"></div>
            <div class="sudokuBox" id="box11"></div>
            <div class="sudokuBox" id="box18"></div>
            <div class="sudokuBox" id="box19"></div>
            <div class="sudokuBox" id="box20"></div>
        </div>
        <div class="box3x3">
            <div class="sudokuBox" id="box3"></div>
            <div class="sudokuBox" id="box4"></div>
            <div class="sudokuBox" id="box5"></div>
            <div class="sudokuBox" id="box12"></div>
            <div class="sudokuBox" id="box13"></div>
            <div class="sudokuBox" id="box14"></div>
            <div class="sudokuBox" id="box21"></div>
            <div class="sudokuBox" id="box22"></div>
            <div class="sudokuBox" id="box23"></div>
        </div>
        <div class="box3x3">
            <div class="sudokuBox" id="box6"></div>
            <div class="sudokuBox" id="box7"></div>
            <div class="sudokuBox" id="box8"></div>
            <div class="sudokuBox" id="box15"></div>
            <div class="sudokuBox" id="box16"></div>
            <div class="sudokuBox" id="box17"></div>
            <div class="sudokuBox" id="box24"></div>
            <div class="sudokuBox" id="box25"></div>
            <div class="sudokuBox" id="box26"></div>
        </div>
        <div class="box3x3">
            <div class="sudokuBox" id="box27"></div>
            <div class="sudokuBox" id="box28"></div>
            <div class="sudokuBox" id="box29"></div>
            <div class="sudokuBox" id="box36"></div>
            <div class="sudokuBox" id="box37"></div>
            <div class="sudokuBox" id="box38"></div>
            <div class="sudokuBox" id="box45"></div>
            <div class="sudokuBox" id="box46"></div>
            <div class="sudokuBox" id="box47"></div>
        </div>
        <div class="box3x3">
            <div class="sudokuBox" id="box30"></div>
            <div class="sudokuBox" id="box31"></div>
            <div class="sudokuBox" id="box32"></div>
            <div class="sudokuBox" id="box39"></div>
            <div class="sudokuBox" id="box40"></div>
            <div class="sudokuBox" id="box41"></div>
            <div class="sudokuBox" id="box48"></div>
            <div class="sudokuBox" id="box49"></div>
            <div class="sudokuBox" id="box50"></div>
        </div>
        <div class="box3x3">
            <div class="sudokuBox" id="box33"></div>
            <div class="sudokuBox" id="box34"></div>
            <div class="sudokuBox" id="box35"></div>
            <div class="sudokuBox" id="box42"></div>
            <div class="sudokuBox" id="box43"></div>
            <div class="sudokuBox" id="box44"></div>
            <div class="sudokuBox" id="box51"></div>
            <div class="sudokuBox" id="box52"></div>
            <div class="sudokuBox" id="box53"></div>
        </div>
        <div class="box3x3">
            <div class="sudokuBox" id="box54"></div>
            <div class="sudokuBox" id="box55"></div>
            <div class="sudokuBox" id="box56"></div>
            <div class="sudokuBox" id="box63"></div>
            <div class="sudokuBox" id="box64"></div>
            <div class="sudokuBox" id="box65"></div>
            <div class="sudokuBox" id="box72"></div>
            <div class="sudokuBox" id="box73"></div>
            <div class="sudokuBox" id="box74"></div>
        </div>
        <div class="box3x3">
            <div class="sudokuBox" id="box57"></div>
            <div class="sudokuBox" id="box58"></div>
            <div class="sudokuBox" id="box59"></div>
            <div class="sudokuBox" id="box66"></div>
            <div class="sudokuBox" id="box67"></div>
            <div class="sudokuBox" id="box68"></div>
            <div class="sudokuBox" id="box75"></div>
            <div class="sudokuBox" id="box76"></div>
            <div class="sudokuBox" id="box77"></div>
        </div>
        <div class="box3x3">
            <div class="sudokuBox" id="box60"></div>
            <div class="sudokuBox" id="box61"></div>
            <div class="sudokuBox" id="box62"></div>
            <div class="sudokuBox" id="box69"></div>
            <div class="sudokuBox" id="box70"></div>
            <div class="sudokuBox" id="box71"></div>
            <div class="sudokuBox" id="box78"></div>
            <div class="sudokuBox" id="box79"></div>
            <div class="sudokuBox" id="box80"></div>
        </div>
    </div>
    <div id="sudokuGridSectionBottom" class="sudokuGridSectionBottom">
        <button class="sudokuSolveButton" id="sudokuSolveButton" onclick="sudokuSolveButtonListener(event)">Solve</button>
    </div>
</div>
`
const noSolution =
    `
    <div id="noSolution" class="noSolution">
        No solution or not enough hints!!!
    </div>
`