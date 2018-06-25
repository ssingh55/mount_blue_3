

var num=1;

//function  delete
const list = document.querySelector('#list-item ul');

list.addEventListener('click', function(e) {
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        console.log(li);
        // console.log();
        list.removeChild(li);
        num--;
       var itm = JSON.parse(localStorage.getItem("items"));
        // console.log(itm);
        for(var j=0;j<itm.length;j++){
            if(itm[j].dindex==li.firstElementChild.id.substring(4))
                {
                    items.splice(j,1);
                   break;
               }
                   
        }
        localStorage.setItem('items', JSON.stringify(items));
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
    const itemname = document.createElement('label');
    const deleteBtn = document.createElement('span');
    const checkBox = document.createElement('input');

    //add content
    deleteBtn.textContent = 'x';//'DELETE';
    itemname.textContent = value;

    //adding the attribute
    checkBox.type = 'checkBox';


    //adding the classes
    li.classList="box-design";
    li.setAttribute('draggable', true);
    li.setAttribute('draggable', true);
    li.setAttribute('ondragned', "dragEnd()");
    li.setAttribute('ondragover', "dragOver(event)");
    li.setAttribute('ondragstart', "dragStart(event)");

    itemname.classList.add('name');
    itemname.htmlFor = 'strike'+num;
    deleteBtn.classList.add('delete');
    checkBox.id = 'strike'+num;
    checkBox.classList.add('strike');
    li.classList.add('box-design');

    //append to document by order
    li.appendChild(checkBox);
    li.appendChild(itemname);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    // document.getElementById("add-item").textContent="";
    num++;
});


//line through
// const strikeBox = document.querySelector("#strike");
// strikeBox.addEventListener('change', function(e) {
//     if (strikeBox.checked) {
    	
//     } else {

//     }
// });


//clear
// button.addEventListener('click',function(){
//     localStorage.clear();
//     while (ul.firstChild) {
//         ul.removeChild(ul.firstChild);
//     }
// });




//dragndrop




//function delete
// let buttons=document.querySelectorAll('#list-item .delete');

// 	Array.from(buttons).forEach(function(btn){

// 		btn.addEventListener('click',function(e){

// 			const li=e.target.parentElement;

// 			li.parentNode.removeChild(li);
// 		});
// 	});