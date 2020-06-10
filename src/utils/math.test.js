import { add } from "./math";

it("adds two numbers", () => {
  const sum = add(2, 3);

  expect(sum).toBe(5);
});
