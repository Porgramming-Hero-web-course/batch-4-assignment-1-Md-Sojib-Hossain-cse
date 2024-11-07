{
    //Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

    function sumArray(numbers: number[]): number[] {
        const sumOfNumbers = numbers.reduce((accumulator, current) => accumulator = accumulator + current, 0)
        return [sumOfNumbers];
    }

    console.log(sumArray([3,4,5,6,7]));
}