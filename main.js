// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

//Problem 1: ageToAbilities
//takes person's age returns message of driving ability

function ageToAbilities(age) {
    if (age < 16) {
        return `You can't drive.`
    } else if (age === 16 || age === 17) {
        return 'You can drive but not vote.'
    } else if (age > 17 && age < 25) {
        return 'You can vote but not rent a car.'
    } else {
        return 'You can do pretty much anything.'
    }
}

//Problem 2: oddIndices
//takes array and returns only the ones at odd indices.

function oddIndices(array) {
    let oddIndicesOnly = [];
    for (let i = 1; i < array.length; i++) {
        if(i % 2 !== 0){
        oddIndicesOnly.push(array[i])
        }
    }
    return oddIndicesOnly;
}

// Problem 3: numOddValues
// takes in an array of numbers and returns the quantity of odd values in that array

function numOddValues (array) {
    let numOfOdds = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            numOfOdds += 1;
        }
    }
    return numOfOdds;
}

// Problem 4: averageStringLength
// takes in an array of strings and returns the average length of the strings

function averageStringLength(array) {
    if (array.length === 0) {
        return 0;
    }
    let totalStringLength = 0;
    for (let i = 0; i < array.length; i++) {
        let stringLength = array[i].length;
        totalStringLength = totalStringLength + stringLength;
    }
    return totalStringLength / array.length;
}

// Problem 5: firstPunctuationIndex
// returns the index of the first appearance of a period, question mark, or exclamation mark in the  string
// if no punctuation return -1

/*function firstPunctuationIndex(string) {
    let periodIndex = string.indexOf('.');
    let questionIndex = string.indexOf('?');
    let exclaimIndex = string.indexOf('!');

    if (exclaimIndex < periodIndex && exclaimIndex < questionIndex) {
        return exclaimIndex;
    } 

    if (periodIndex < questionIndex && periodIndex < exclaimIndex) {
        return periodIndex;
    } 
    
    if (questionIndex < periodIndex && questionIndex < exclaimIndex) {
        return questionIndex;
    } 
    
    else {
        return -1;
    }
}*/

function firstPunctuationIndex(string) {
    let punctuationIndices= [];
    let lowestIndex = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '.') {
            punctuationIndices.push(i)
        } else if (string[i] === '?') {
            punctuationIndices.push(i);
        } else if (string[i] === '!') {
            punctuationIndices.push(i);
        }
    }
    
    if (punctuationIndices.length === 0) {
        return -1
    } else {
        return punctuationIndices[0];
    }
}   


console.log(firstPunctuationIndex('wow. goodness me!'))
console.log(firstPunctuationIndex('alright alright alright'))









// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
    ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
    oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
    numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
    averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === 'undefined') {
    firstPunctuationIndex = undefined;
}
if (typeof getPlace === 'undefined') {
    getPlace = undefined;
}

module.exports = {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace
};
