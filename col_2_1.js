let elems = document.querySelectorAll('p');
let arr1 = [];

for (let elem of elems) {
	arr1.push(elem);
}

let arr2 = [...elems];

let arr3 = Array.from(elems);

console.log(arr1.join('-'), arr2.join(''), arr3.join(''));
