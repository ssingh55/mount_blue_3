//variables
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');

// //other variable
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

//creating a li tag
const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}



// form.addEventListener('submit', function(e){
//     e.preventDefault();

//     itemsArray.push(input.value);
//     localStorage.setItem('items', JSON.stringify(itemsArray));
//     liMaker(input.value);
//     input.value = "";
// });




// //clear
// button.addEventListener('click',function(){
//     localStorage.clear();
//     while (ul.firstChild) {
//         ul.removeChild(ul.firstChild);
//     }
// });





//function  delete
const list = document.querySelector('#list-item ul');

list.addEventListener('click', function(e) {
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        list.removeChild(li);
    }

});

//function add
const addForm = document.forms['add-item'];
addForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // itemsArray.push(input.value);
    // localStorage.setItem('items', JSON.stringify(itemsArray));
    // liMaker(input.value);
    // input.value = "";


    //get the value from user input
    const value = addForm.querySelector('input[type="text"]').value;

    //create elemeents
    const li = document.createElement('li');
    const itemname = document.createElement('span');
    const deleteBtn = document.createElement('span');
    const checkBox = document.createElement('input');

    //add content
    deleteBtn.textContent = 'DELETE';
    itemname.textContent = value;

    //adding the attribute
    checkBox.type = 'checkBox';


    //adding the classes
    itemname.classList.add('name');
    deleteBtn.classList.add('delete');
    checkBox.id = 'strike';
    checkBox.classList.add('strike');
    li.classList.add('box-design');

    //append to document by order
    li.appendChild(checkBox);
    li.appendChild(itemname);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    itemsArray.push(item);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(input.value);
    input.value = "";
});


//line through
const strikeBox = document.querySelector("#strike");
strikeBox.addEventListener('change', function(e) {
    if (strikeBox.checked) {

    } else {

    }
});

//display
data.forEach(item => {
    liMaker(item);
});




//function delete
// let buttons=document.querySelectorAll('#list-item .delete');

//  Array.from(buttons).forEach(function(btn){

//      btn.addEventListener('click',function(e){

//          const li=e.target.parentElement;

//          li.parentNode.removeChild(li);
//      });
//  });