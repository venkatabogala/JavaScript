console.dir(document); // show document object

let clickCounter = 0;
let theme = true; // true => light , false => dark

//Selecting an element
const body = document.querySelector('body');
//Creating an element
const h1 = document.createElement('h1');
//Change element properties
h1.textContent = 'Hello World';
// Add element to the DOM
body.appendChild(h1);

//h1.remove(); To remove an element

//Change styles
h1.style.color = 'blue';

const btn = document.createElement('button');
btn.textContent = 'Dark Mode';
body.appendChild(btn);

// Listening to an event and take action
btn.addEventListener('click', () => {
    if (theme) {
        body.style.backgroundColor = 'black';
        h1.style.color = 'white';
        btn.textContent ='Light Mode';
        theme = !theme;
        return;
    }
        body.style.backgroundColor = 'white';
        h1.style.color = 'black';
        btn.textContent ='Dark Mode';
        theme = !theme;
       
})

//If you want to handle more than one element (List of node)

const listItems = document.querySelectorAll('.item');
console.dir(listItems);
console.log(listItems.length);
/*listItems[0].style.color = 'red';
  listItems[0].style.color = 'red';
  listItems[0].style.color = 'red'; */

listItems.forEach(item => {
    item.style.color = 'red';
}) 

const buttonsList = document.querySelectorAll('.btn');

buttonsList.forEach(btn => {
    btn.addEventListener('click', (e) => {
        //console.log('Event', e);
        //console.log('Event', e.target); // to know which element was clicked
        console.log('Event', e.target.textContent);
        e.target.style.background = 'orange';
        //e.target.textContent = 'Clicked';
    })
})

/*addEventListener -> ()=>{}(e)
function x(y){
    console.log(y);
}
const z = x;
z(10); */

//To access the parent and the children
console.log(body.children[0].children[0].innerHTML);

//To see who is the parent
//console.log(body.parentNode);
const liParent = listItems[0].parentNode;
const bodyChildren = body.children;

for (let child of bodyChildren) {
    if(child.nodeName.toLowerCase() === 'ul') {
        child.style.backgroundColor = 'yellow';
    }
}

//console.log('node type', child.nodeType);
//console.log('node tagName', child.tagName); or
//console.log('node nodeName', child.nodeName);

//liParent.style.backgroundColor = 'yellow';

console.log(bodyChildren);

// Creating a counter to know how many times the clicking happens
const counterText = document.createElement('p');
body.appendChild(counterText);
counterText.textContent = clickCounter.toString();

document.addEventListener('click', (e) => {
    console.log(e.target);
    clickCounter++;
    counterText.textContent = clickCounter.toString();

});

const listUl = document.querySelector('#listUl');
listUl.addEventListener('click', () => {
    console.log('One of your children were clicked');

});

const articleOne = document.querySelector('#article-1');
const articleTwo = document.querySelector('#article-2');

articleOne.addEventListener('click', () => {
    articleOne.style.border = '2px solid blue';
    articleTwo.style.border = 'none';
});

articleTwo.addEventListener('click', () => {
    articleTwo.style.border = '2px solid blue';
    articleOne.style.border = 'none';
});










