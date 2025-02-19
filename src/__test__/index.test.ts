import { describe, expect, it } from "vitest";

import {
  upperFirst,
  fetchRequest,
  delay,
  arrayEquals,
  arrayToObject,
  generateArray,
  reverseString,
  removeArrayItemByValue,
  removeArrayItemByIndex,
  objectToArray,
  isEmptyObject,
  shuffleArray,
  generateRandomNumber,
  getPercentage,
  arrayLastItem,
} from "../index";

describe("all methods in the package", () => {
  it("capitalize the first letter of the string.", () => {
    expect(upperFirst("foo")).toBe("Foo");
  });

  it("fetch data from an api.", async () => {
    expect(
      await fetchRequest("https://api.github.com/users/wesleyara"),
    ).toEqual(
      expect.objectContaining({
        login: "wesleyara",
      }),
    );
  });

  it("delay the execution of a function.", async () => {
    const start = Date.now();
    await delay(1000);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(1000);
  });

  it("check if two arrays are equal.", () => {
    expect(arrayEquals([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  it("convert an array to an object.", () => {
    expect(
      arrayToObject(
        [
          { id: 1, name: "a" },
          { id: 2, name: "b" },
        ],
        "id",
      ),
    ).toEqual({
      1: { id: 1, name: "a" },
      2: { id: 2, name: "b" },
    });
  });

  it("generate an array of numbers.", () => {
    expect(generateArray(5)).toEqual([1, 2, 3, 4, 5]);
  });

  it("reverse a string.", () => {
    expect(reverseString("foo")).toBe("oof");
  });

  it("remove an item from an array.", () => {
    expect(removeArrayItemByValue([1, 2, 3], 2)).toEqual([1, 3]);
  });

  it("remove an item from an array by index.", () => {
    expect(removeArrayItemByIndex([1, 2, 3], 1)).toEqual([1, 3]);
  });

  it("convert an object to an array.", () => {
    expect(
      objectToArray({
        1: { id: 1, name: "a" },
        2: { id: 2, name: "b" },
      }),
    ).toEqual([
      { id: 1, name: "a" },
      { id: 2, name: "b" },
    ]);
  });

  it("check if an object is empty.", () => {
    expect(isEmptyObject({})).toBe(true);
  });

  it("randomly sorting arrays.", () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = shuffleArray(arr1);
    expect(arr1.some(item => arr2.includes(item))).toBe(true);
  });

  it("generate a random number.", () => {
    expect(generateRandomNumber(1, 10)).toBeGreaterThanOrEqual(1);
    expect(generateRandomNumber(1, 10)).toBeLessThanOrEqual(10);
  });

  it("get the percentage of a number.", () => {
    expect(getPercentage(10, 100)).toBe(10);
  });

  it("get the last item of an array.", () => {
    expect(arrayLastItem([1, 2, 3])).toBe(3);
  });
});
