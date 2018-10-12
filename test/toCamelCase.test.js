import expect from "expect";
import { toCamelCase } from "../src";
import { snakeCaseObject } from "./toSnakeCase";

export const camelCaseObject = {
  availability: {
    bookPrice: 3,
  },
  variantId: "1234",
  branches: [
    {
      branchName: "Landscape Hub",
      _keyWithLeadingUnderscore: "Leave the underscore on the front",
      somethingElse: { wowThis: "is really nested" },
    },
  ],
};

describe("toCamelCase", () => {
  it("returns an object with all keys converted to camelCase", () => {
    expect(toCamelCase(camelCaseObject)).toEqual(camelCaseObject);
    expect(toCamelCase(snakeCaseObject)).toEqual(camelCaseObject);
    expect(toCamelCase([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ]);
  });
});

