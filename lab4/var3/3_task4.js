var arrA = new Array(10, 4, 7, 6, 5);
var arrB = new Array(5);

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

function InsertionSort(A) {
    var n = A.length;
    for (var i = 0; i < n; i++) {
        var v = A[i], j = i - 1;
        while (j >= 0 && A[j] > v) {
            A[j + 1] = A[j];
            j--;
        }
        A[j + 1] = v;
    }
    return A;
}

x = getMaxOfArray(arrA)
console.log(arrB);

for (var i = 0; i < arrA.length; i++) {
    arrB[i] = x * arrA[i];
}
console.log(arrB);
console.log(InsertionSort(arrB))
