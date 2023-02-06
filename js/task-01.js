const links = document.querySelectorAll('.item');

console.log('Number of categories: '+ links.length);

for (let i = 0; i < links.length; i+=1) {
    console.log('Category: ' + links[i].firstElementChild.textContent);
    console.log('Elements: ' + links[i].lastElementChild.children.length);
};

const items = links.map(link =>{
    console.log('Category: ' + link.firstElementChild.textContent);
    console.log('Elements: ' + link.lastElementChild.children.length);
});

