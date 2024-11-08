{
    //Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

    function removeDuplicates(numbers : number[]): number[]{
        const preservedArr = numbers;
        const duplicateArr = [...numbers];
        const result : number[]= [];

        const filteredArr = duplicateArr.filter((num:number) => {
            if(!result.includes(num)){
                result.push(num);
                return num;
            }
        })
        return filteredArr;
    }

    // console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))
}