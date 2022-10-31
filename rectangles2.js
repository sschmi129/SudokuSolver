
const x = 4;

const rectangles = [
    // 1. row
    {
        left: 0 + x, top: 0 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 50 + x, top: 0 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 100 + x, top: 0 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 150 + x, top: 0 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 200 + x, top: 0 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 250 + x, top: 0 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 300 + x, top: 0 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 350 + x, top: 0 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 400 + x, top: 0 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    // 2. row
    {
        left: 0 + x, top: 50 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 50 + x, top: 50 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 100 + x, top: 50 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 150 + x, top: 50 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 200 + x, top: 50 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 250 + x, top: 50 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 300 + x, top: 50 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 350 + x, top: 50 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 400 + x, top: 50 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    // 3. row
    {
        left: 0 + x, top: 100 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 50 + x, top: 100 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 100 + x, top: 100 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 150 + x, top: 100 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 200 + x, top: 100 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 250 + x, top: 100 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 300 + x, top: 100 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 350 + x, top: 100 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 400 + x, top: 100 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    // 4. row
    {
        left: 0 + x, top: 150 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 50 + x, top: 150 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 100 + x, top: 150 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 150 + x, top: 150 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 200 + x, top: 150 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 250 + x, top: 150 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 300 + x, top: 150 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 350 + x, top: 150 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 400 + x, top: 150 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    // 5. row
    {
        left: 0 + x, top: 200 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 50 + x, top: 200 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 100 + x, top: 200 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 150 + x, top: 200 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 200 + x, top: 200 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 250 + x, top: 200 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 300 + x, top: 200 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 350 + x, top: 200 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 400 + x, top: 200 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    // 6. row
    {
        left: 0 + x, top: 250 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 50 + x, top: 250 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 100 + x, top: 250 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 150 + x, top: 250 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 200 + x, top: 250 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 250 + x, top: 250 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 300 + x, top: 250 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 350 + x, top: 250 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 400 + x, top: 250 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    // 7. row
    {
        left: 0 + x, top: 300 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 50 + x, top: 300 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 100 + x, top: 300 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 150 + x, top: 300 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 200 + x, top: 300 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 250 + x, top: 300 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 300 + x, top: 300 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 350 + x, top: 300 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 400 + x, top: 300 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    // 8. row
    {
        left: 0 + x, top: 350 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 50 + x, top: 350 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 100 + x, top: 350 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 150 + x, top: 350 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 200 + x, top: 350 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 250 + x, top: 350 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 300 + x, top: 350 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 350 + x, top: 350 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 400 + x, top: 350 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    // 9. row
    {
        left: 0 + x, top: 400 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 50 + x, top: 400 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 100 + x, top: 400 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 150 + x, top: 400 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 200 + x, top: 400 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 250 + x, top: 400 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 300 + x, top: 400 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 350 + x, top: 400 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
    {
        left: 400 + x, top: 400 + x, width: 50 - 2 * x, height: 50 - 2 * x,
    },
];


