import { reversestring } from "./reversestring";

test("Reverses the word", () => {
  expect(reversestring("word")).toBe("drow");
});

test("Reverses the word HELLO", () => {
  expect(reversestring("hello")).toBe("olleh");
});
