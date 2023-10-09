function reverseWordsInSentence(sentence) {
    // Split the sentence into words
    let words = sentence.split(" ");
    
    // Reverse each word and store the reversed words in a new array
    let reversedWords = words.map(word => {
        return word.split('').reverse().join('');
    });
    
    // Join the reversed words back into a sentence
    let reversedSentence = reversedWords.join(' ');
    
    return reversedSentence;
}

let inputSentence = "Java Script is a very easy language";
let reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence); 
//output-avaJ tpircS si a yrev ysae egaugnal