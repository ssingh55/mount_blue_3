

const list = document.querySelector('#list-item ul');

list.addEventListener('click', function(e) {
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        list.removeChild(li);
        
        

        items.splice(e.target.parentNode.children[0].getAttribute("position"), 1);
        populateList(items, itemsList);

        
        if(items.length==0) k=0;
        localStorage.setItem('items', JSON.stringify(items));
        bar();
    }

});
