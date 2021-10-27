const arrayA = [23, 12, 1, 9, 324, 26, 71, 24, 3, 17];
const arrayB = [13, 12, 7, 4, 121, 28, 71, 32, 8, 17];

function createArrC(arrA, arrB) {
    const arrayC = [];
    for (let i in arrA) {
        arrayC[i] = arrA[i] === arrB[i] ? 1 : (+(1 / (arrA[i] - arrB[i])).toFixed(3));
    }
    return bubbleSort(arrayC);
}

function bubbleSort(arr) {
    for (let i in arr) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log("Масив А:", arrayA.join(", "));
console.log("Масив В:", arrayB.join(", "));
console.log("Масив С:", createArrC(arrayA, arrayB).join(", "));