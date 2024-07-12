import { sum } from '../src/index';

// test("it works", () => {
//     console.log("dummy test")
// })

test("sum", () => {
    expect(sum(1, 2)).toBe(2);
})