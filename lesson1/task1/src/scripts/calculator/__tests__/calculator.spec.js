import { sum, mult } from "../calculator";

it("should return sum of two numbers", () => {
  expect(sum(2, 3)).toEqual(5);
});

it("should return multiplied numbers", () => {
  expect(mult(2, 3)).toEqual(6);
});
