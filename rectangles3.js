const x = 5;
const y = 3;

const rectangles = [
    // 1. row
    {
        left: 0 + x, top: 0 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 40 + x, top: 0 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 80 + x, top: 0 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 120 + x, top: 0 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 160 + x, top: 0 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 200 + x, top: 0 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 240 + x, top: 0 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 280 + x, top: 0 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 320 + x, top: 0 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    // 2. row
    {
        left: 0 + x, top: 40 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 40 + x, top: 40 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 80 + x, top: 40 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 120 + x, top: 40 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 160 + x, top: 40 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 200 + x, top: 40 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 240 + x, top: 40 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 280 + x, top: 40 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 320 + x, top: 40 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    // 3. row
    {
        left: 0 + x, top: 80 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 40 + x, top: 80 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 80 + x, top: 80 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 120 + x, top: 80 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 160 + x, top: 80 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 200 + x, top: 80 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 240 + x, top: 80 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 280 + x, top: 80 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 320 + x, top: 80 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    // 4. row
    {
        left: 0 + x, top: 120 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 40 + x, top: 120 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 80 + x, top: 120 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 120 + x, top: 120 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 160 + x, top: 120 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 200 + x, top: 120 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 240 + x, top: 120 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 280 + x, top: 120 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 320 + x, top: 120 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    // 5. row
    {
        left: 0 + x, top: 160 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 40 + x, top: 160 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 80 + x, top: 160 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 120 + x, top: 160 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 160 + x, top: 160 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 200 + x, top: 160 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 240 + x, top: 160 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 280 + x, top: 160 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 320 + x, top: 160 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    // 6. row
    {
        left: 0  + x, top: 200 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 40  + x, top: 200 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 80  + x, top: 200 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 120 + x, top: 200 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 160 + x, top: 200 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 200 + x, top: 200 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 240 + x, top: 200 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 280 + x, top: 200 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 320 + x, top: 200 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    // 7. row
    {
        left: 0 + x, top: 240 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 40 + x, top: 240 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 80 + x, top: 240 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 120 + x, top: 240 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 160 + x, top: 240 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 200 + x, top: 240 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 240 + x, top: 240 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 280 + x, top: 240 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 320 + x, top: 240 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    // 8. row
    {
        left: 0 + x, top: 280 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 40 + x, top: 280 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 80 + x, top: 280 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 120 + x, top: 280 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 160 + x, top: 280 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 200 + x, top: 280 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 240 + x, top: 280 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 280 + x, top: 280 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 320 + x, top: 280 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    // 9. row
    {
        left: 0 + x, top: 320 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 40 + x, top: 320 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 80 + x, top: 320 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 120 + x, top: 320 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 160 + x, top: 320 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 200 + x, top: 320 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 240 + x, top: 320 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 280 + x, top: 320 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
    {
        left: 320 + x, top: 320 + y, width: 40 - 2 * x, height: 40 - 2 * y,
    },
];


