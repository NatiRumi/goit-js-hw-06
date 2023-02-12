const links = document.querySelectorAll('.item');

console.log('Number of categories: '+ links.length);


// var 1
// for (let i = 0; i < links.length; i+=1) {
//     console.log('Category: ' + links[i].firstElementChild.textContent);
//     console.log('Elements: ' + links[i].lastElementChild.children.length);
// };


// var 2
// [...links].map(link =>{
//     console.log('Category: ' + link.firstElementChild.textContent);
//     console.log('Elements: ' + link.lastElementChild.children.length);
// });


links.forEach(element => {
    console.log('Category: ' + element.firstElementChild.textContent);  
    console.log('Elements: ' + element.lastElementChild.children.length);  
});


// links[i].querySelector('h2').textContent;
// links[i].querySelectorAll('li').length;

