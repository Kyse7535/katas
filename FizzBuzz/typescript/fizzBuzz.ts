class PositiveNumber {
    private _number: Number;

    constructor(_number: number) {
        if (_number <= 0) {
            throw new Error("Invalid positive number");
        }
        this._number = _number;
    }
    get number() { return this._number; }

}

export function fizzBuzz(_input: PositiveNumber) {
    return "fizz"
}