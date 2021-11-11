/*
- Створити одновимірний массив + 
- Кількість елементів в масиві задана користувачем. +  
- Обчислити суму елементів між максимальним та мінімальними значеннями масиву. +
- Упорядкувати масив у порядку зростання.(метод Швидкого сортування) + 
- Надрукувати вхідний та вихідний масив. + 
- Застосувати функції + 
*/

document.querySelector('button').onclick = function(){

	let length = document.querySelector('#arrayLength').value;
	let arrayMax = document.querySelector('#arrayMax').value;
	let arrayMin = document.querySelector('#arrayMin').value;

	let unsortedArray = [];

	for(i =0 ; i< length; i++){
		unsortedArray.push(randomInteger(arrayMin,arrayMax));
	}

	let sortedArray = quickSort(unsortedArray);

	// console.log(unsortedArray);
	// console.log("Длина масива: " + unsortedArray.length);
	// console.log("Максимальный елемент: " + findMaxElement(unsortedArray));
	// console.log("Минимальный елемент: " + findMinElement(unsortedArray));
	// console.log("Сума: " + summ(findMaxElement(unsortedArray), findMinElement(unsortedArray)));

	document.querySelector('#out').innerHTML =
	 "Початковий масив: <br>" + unsortedArray +
	 "<br> Відсортований масив: <br>" + sortedArray + 
	 "<br> Максимальний елемент: " + findMaxElement(unsortedArray) + 
	 "<br> Мінімальний елемент: " + findMinElement(unsortedArray) + 
	 "<br> Сума: " + summ(findMaxElement(unsortedArray), findMinElement(unsortedArray));

}

function randomInteger(min, max) {
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(rand);
 }

function findMaxElement(array){
	max = array[0];
	for(i = 0; i < array.length ; i++){
		if(max < array [i]){
			max = array[i];
		}
	}
	return max;
}

function findMinElement(array){
	max = array[0];
	for(i = 0; i < array.length ; i++){
		if(max > array [i]){
			max = array[i];
		}
	}
	return max;
}

function summ(a, b){
	return a + b;
}

function quickSort(arr) {
	if (arr.length < 2) return arr;
	let pivot = arr[0];
	const left = [];
	const right = [];
	  
	for (let i = 1; i < arr.length; i++) {
	  if (pivot > arr[i]) {
		 left.push(arr[i]);
	  } else {
		 right.push(arr[i]);
	  }
	}
	return quickSort(left).concat(pivot, quickSort(right));
 }