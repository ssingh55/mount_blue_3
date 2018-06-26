

// var num=1;

//function  delete
const list = document.querySelector('#list-item ul');

list.addEventListener('click', function(e) {
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        //console.log(li);
        list.removeChild(li);
        // num--;
       //var itm = JSON.parse(localStorage.getItem("items"));//getting item from lS
        // console.log(itm);
        /*for(var j=0;j<items.length;j++){
            //if(itm[j].dindex==li.firstElementChild.id.substring(4))
            console.log(li.firstElementChild.id+" ++ "+items[j].indexid);
            if(items[j].indexid===li.firstElementChild.id)
                {
                    // if(j!=itm.length-1)
                    //     items[j+1].dindex--;
                    console.log(li.firstElementChild.id+" "+items[j].indexid);
                    items.splice(j,1);
                    // k--;
                    // items.pop(j);
                    // console.log(items);
                    // if(j==itm.length-1)
                    //     itm[j].dindex--;
                    // else
                    //     itm[j+1].dindex--;
                    // console.log(itm[j+1].dindex);
                   break;
               }
                   
        }*/

        items.splice(e.target.parentNode.children[0].getAttribute("position"), 1);
        populateList(items, itemsList);

        //reindex();
        if(items.length==0) k=0;
        localStorage.setItem('items', JSON.stringify(items));
        bar();
    }

});
/*
//function add
const addForm = document.forms['add-item'];
addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    //get the value from user input
    const value = addForm.querySelector('input[type="text"]').value;
    if(value == null) return;
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
    // li.setAttribute('draggable', true);
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
*/

//line through
// const strikeBox = document.querySelector("#strike");
// strikeBox.addEventListener('change', function(e) {
//     if (strikeBox.checked) {
    	
//     } else {

//     }
// });


//clear
// const button=document.getElementsByClassName('clear');
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