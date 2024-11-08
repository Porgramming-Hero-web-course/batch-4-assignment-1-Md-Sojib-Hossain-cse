{
    //Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

    function countWordOccurrences(sentence : string , word : string) : number{
        let count = 0;
        const sentenceArr = sentence.toLowerCase().split(' ');
        sentenceArr.forEach(sen => {
            if(sen.includes(word.toLowerCase())){
                count++;
            }
        })
        return count;
    }

    // console.log(countWordOccurrences("I love typescript", "typescript"))

}