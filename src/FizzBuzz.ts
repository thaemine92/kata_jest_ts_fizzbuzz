export class FizzBuzz {
    answerFor(arg0: number): string | number {
        const nStr = arg0.toString();
        if (arg0 % 15 === 0 || (nStr.includes('3') && nStr.includes('5'))) return "FizzBuzz";
        if (arg0 % 3 === 0 || nStr.includes('3')) return "Fizz";
        if (arg0 % 5 === 0 || nStr.includes('5')) return "Buzz";
        return arg0;
    }
}