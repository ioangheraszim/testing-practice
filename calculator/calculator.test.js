test("Addition of two numbers correctly", () => {
  expect(add(1, 2)).toBe(3);
});

test("Substract one number from another", () => {
  expect(substract(5, 3)).toBe(2);
});

test("Divides two numbers correctly", () => {
  expect(division(4, 2)).toBe(2);
});

test("Multiplies two numbers correctly", () => {
  expect(multiply(5, 5)).toBe(25);
});
