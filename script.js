//1 задание
const listBook = document.querySelectorAll('.book');
listBook[0].before(listBook[1]);
listBook[2].before(listBook[4]);
listBook[5].after(listBook[2]);

console.log(listBook);


//2 задание
const body = document.querySelector('body');
body.style.backgroundImage = '';
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';


// 3 задание
const title =  document.querySelectorAll('h2');
title[2].innerHTML = 'Книга 3. this и Прототипы Объектов';
title[2].style.color = 'darkkhaki';


// 4 задание
const adv = document.querySelector('.adv');
adv.remove();


// 5 задание
const lists2 = document.querySelectorAll('ul')[1];
const elems2 = lists2.querySelectorAll('li');
elems2[1].after(elems2[3]);
elems2[2].before(elems2[6]);
elems2[2].before(elems2[8]);
elems2[10].before(elems2[2]);

const lists5 = document.querySelectorAll('ul')[4];
const elems5 = lists5.querySelectorAll('li');
elems5[4].after(elems5[2]);
elems5[3].before(elems5[9]);
elems5[7].after(elems5[5]);


//6 задание
const lists6 = document.querySelectorAll('ul')[5];
const elems6 = lists6.querySelectorAll('li');
const cloneElem = elems6[8].cloneNode(true);
cloneElem.textContent = 'Глава 8: За пределами ES6';
lists6.append(cloneElem);
elems6[9].before(cloneElem);



console.log(lists6);
console.log(elems6);
console.log(cloneElem);





