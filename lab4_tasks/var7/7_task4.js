let nums = [9,2,1,0,-4,7,23,-8,-34,10,-5,-9,-14,67,3,-1];

// Знайти найбільший серед від’ємних елементів масиву.
function maxNeg (array) {

    let maxNegative = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < array.length; i++) {

        if (nums[i]  < 0 && array[i] > maxNegative) {
            maxNegative = array[i];
        }
    }

    return maxNegative;
}

// Знайти найменший серед додатних елементів масиву.
function minPos (array) {

    let minPositive = Number.MAX_VALUE;

    for(let i = 0; i < array.length; i++) {

        if(array[i] > 0 && array[i] < minPositive) {
            minPositive = array[i];
        }
    }

    return minPositive;

}

//Упорядкувати масив у порядку зменшення методом вибору
function selectionSort (array) {

    for (let i = 0, l = array.length, k = l - 1; i < k; i++) {
        let indexMin = i;
        for (let j = i + 1; j < l; j++) {
            if (array[indexMin] < array[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [array[i], array[indexMin]] = [array[indexMin], array[i]];
        }
    }
    return array;
}

console.log("Найбільший серед від’ємних елементів масиву: " + maxNeg(nums));
console.log("Найменший серед додатних елементів масиву: " + minPos(nums));
console.log("Вхідний масив: " + nums  + "\nВихідний масив: " + selectionSort(nums));