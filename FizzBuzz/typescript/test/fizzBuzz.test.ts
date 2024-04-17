import { fizzBuzz } from "../fizzBuzz";

describe('testing index file', () => {
    test('empty string should result in zero', () => {
        expect(fizzBuzz()).toEqual("fizz");
    });
});