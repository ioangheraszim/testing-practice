import { capitalize } from "./capitalize";

test("Capitalizes the first letter of a word", () => {
  expect(capitalize("word")).toBe("Word");
});
