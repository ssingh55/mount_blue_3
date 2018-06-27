 var k = 0;
 const addItems = document.querySelector('.add-items');
 const itemsList = document.querySelector('.plates');
 var items = JSON.parse(localStorage.getItem('items')) || [];

 function addItem(e) {
     e.preventDefault();
     const text = (this.querySelector('[name=item]')).value;
     if (text == null) return;
     const indexid = 'item' + k;
     k++;
     console.log(indexid);
     const item = {
         text,
         done: false,
         indexid
     };
     items.push(item);
     populateList(items, itemsList);
     localStorage.setItem('items', JSON.stringify(items));
     this.reset();
 }


 function populateList(plates = [], platesList) {
     platesList.innerHTML = plates.map((plate, i) => {
         for (let p in plates) {
             if (plates[i].text == plate.text) {
                 var pos = i;
                 return `
        <li class="box-design" draggable="true" ondragend="dragEnd()" ondragover="dragOver(event)" ondragstart="dragStart(event)" onclick=bar();>
          <input type="checkbox" class="strike" position=${pos} data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
          <label for="item${i}">${plate.text}</label>
          <span class="delete">x</span>
        </li>
      `;
             }
         }
     }).join('');
 }


 function toggleDone(e) {
     if (!e.target.matches('input')) return;
     const el = e.target;
     const index = el.dataset.index;
     items[index].done = !items[index].done;
     localStorage.setItem('items', JSON.stringify(items));
     populateList(items, itemsList);
     bar();
 }

 addItems.addEventListener('submit', addItem);
 itemsList.addEventListener('click', toggleDone);
 populateList(items, itemsList);