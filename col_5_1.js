let map = new Map;

let obj1 = {'1': 'a'}
let obj2 = {'2': 'b'}
let obj3 = {'3': 'c'}

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

map.set(obj1, arr1);
map.set(obj2, arr2);
map.set(obj3, arr3);

let keys = map.keys();

for (let key of keys) {
	console.log(key);
}