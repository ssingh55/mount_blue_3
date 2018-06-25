
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
    li.classList.add('box-design');

    //append to document by order
    li.appendChild(checkBox);
    li.appendChild(itemname);
    li.appendChild(deleteBtn);
    list.appendChild(li);
});


//line through
const strikeBox = document.querySelector("#strike");
strikeBox.addEventListener('change', function(e) {
    if (strikeBox.checked) {
    	
    } else {

    }
});




//function delete
// let buttons=document.querySelectorAll('#list-item .delete');

// 	Array.from(buttons).forEach(function(btn){

// 		btn.addEventListener('click',function(e){

// 			const li=e.target.parentElement;

// 			li.parentNode.removeChild(li);
// 		});
// 	});