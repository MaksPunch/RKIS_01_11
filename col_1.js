let elems = document.querySelectorAll('p');
console.log(elems[1], elems[0]) // работает, выведет <p id = 'sent'></p> и <p>1</p>
console.log(elems.join('')) // не работает, как и другие методы массивов