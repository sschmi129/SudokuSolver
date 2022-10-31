const x = 6;
const y = 3;

const rectangles = [
    // 1. row
    {
        left: 0 + x, top: 0 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 50 + x, top: 0 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 100 + x, top: 0 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 150 + x, top: 0 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 200 + x, top: 0 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 250 + x, top: 0 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 300 + x, top: 0 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 350 + x, top: 0 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 400 + x, top: 0 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    // 2. row
    {
        left: 0 + x, top: 50 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 50 + x, top: 50 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 100 + x, top: 50 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 150 + x, top: 50 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 200 + x, top: 50 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 250 + x, top: 50 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 300 + x, top: 50 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 350 + x, top: 50 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 400 + x, top: 50 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    // 3. row
    {
        left: 0 + x, top: 100 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 50 + x, top: 100 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 100 + x, top: 100 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 150 + x, top: 100 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 200 + x, top: 100 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 250 + x, top: 100 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 300 + x, top: 100 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 350 + x, top: 100 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 400 + x, top: 100 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    // 4. row
    {
        left: 0 + x, top: 150 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 50 + x, top: 150 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 100 + x, top: 150 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 150 + x, top: 150 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 200 + x, top: 150 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 250 + x, top: 150 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 300 + x, top: 150 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 350 + x, top: 150 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 400 + x, top: 150 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    // 5. row
    {
        left: 0 + x, top: 200 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 50 + x, top: 200 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 100 + x, top: 200 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 150 + x, top: 200 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 200 + x, top: 200 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 250 + x, top: 200 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 300 + x, top: 200 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 350 + x, top: 200 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 400 + x, top: 200 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    // 6. row
    {
        left: 0 + x, top: 250 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 50 + x, top: 250 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 100 + x, top: 250 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 150 + x, top: 250 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 200 + x, top: 250 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 250 + x, top: 250 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 300 + x, top: 250 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 350 + x, top: 250 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 400 + x, top: 250 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    // 7. row
    {
        left: 0 + x, top: 300 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 50 + x, top: 300 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 100 + x, top: 300 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 150 + x, top: 300 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 200 + x, top: 300 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 250 + x, top: 300 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 300 + x, top: 300 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 350 + x, top: 300 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 400 + x, top: 300 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    // 8. row
    {
        left: 0 + x, top: 350 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 50 + x, top: 350 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 100 + x, top: 350 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 150 + x, top: 350 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 200 + x, top: 350 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 250 + x, top: 350 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 300 + x, top: 350 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 350 + x, top: 350 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 400 + x, top: 350 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    // 9. row
    {
        left: 0 + x, top: 400 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 50 + x, top: 400 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 100 + x, top: 400 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 150 + x, top: 400 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 200 + x, top: 400 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 250 + x, top: 400 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 300 + x, top: 400 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 350 + x, top: 400 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
    {
        left: 400 + x, top: 400 + y, width: 50 - 2 * x, height: 50 - 2 * y,
    },
];



