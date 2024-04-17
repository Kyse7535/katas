import { fizzBuzz } from "../fizzBuzz";

describe('testing index file', () => {
    test('should return fizz when the input is a multiple of 3', () => {
        expect(fizzBuzz(3)).toEqual("Fizz");
    });
    test('should return Buzz when the input is a multiple of 5', () => {
        expect(fizzBuzz(5)).toEqual("Buzz");
    });
    test('should return FizzBuzz when the input is a multiple of 3 and 5', () => {
        expect(fizzBuzz(15)).toEqual("FizzBuzz");
    })
    test('should return 1 when the input is 1', () => {
        expect(fizzBuzz(1)).toEqual('1');
    })
    test('should return fizz correctly', () => {
        let result: String = "";
        for (let i = 1; i < 16; i++) {
            result += fizzBuzz(i);
        }
        expect(result).toEqual("12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz");
    })
});