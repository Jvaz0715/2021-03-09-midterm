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

//console.log(oddIndices([0, 2, 4, 6, 8, 10]))


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
