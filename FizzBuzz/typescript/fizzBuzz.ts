export function fizzBuzz(_input: number) {
    if (_input <= 0) {
        throw new Error("invalid positive number");

    }
    if (_input % 3 === 0 && _input % 5 === 0) {
        return "FizzBuzz"
    }
    else if (_input % 3 === 0) {
        return "Fizz"
    }
    else if (_input % 5 === 0) {
        return "Buzz"
    }
    return _input.toString();
}