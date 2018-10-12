import expect from "expect";
import { toSnakeCase } from "../src";
import { camelCaseObject } from "./toCamelCase.test";

export const snakeCaseObject = {
  availability: {
    book_price: 3,
  },
  variant_id: "1234",
  branches: [
    {
      branch_name: "Landscape Hub",
      _key_with_leading_underscore: "Leave the underscore on the front",
      something_else: { wow_this: "is really nested" },
    },
  ],
};

describe("toSnakeCase", () => {
  it("returns an object with all keys converted to snakeCase", () => {
    expect(toSnakeCase(camelCaseObject)).toEqual(snakeCaseObject);
    expect(toSnakeCase(snakeCaseObject)).toEqual(snakeCaseObject);
    expect(toSnakeCase([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ]);
  });
});
