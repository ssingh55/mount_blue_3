var item;

function dragOver(e) {
  //e.preventDefault();
  var mainTag;
  if(e.target.tagName == 'SPAN'||e.target.tagName == 'LABEL'||e.target.tagName == 'INPUT'){
    mainTag = e.target.parentNode;
  }
  else{
    mainTag = e.target;
  }

  
  console.log(mainTag.tagName);
  if (isBefore(item, mainTag))
    mainTag.parentNode.insertBefore(item, mainTag);
  else
    mainTag.parentNode.insertBefore(item, mainTag.nextSibling);
}

function dragEnd() {
 // e.preventDefault();
  item = null;

  for(var i=1;i<=items.length;i++)
  {
    var list = document.querySelector('#list-item ul li:nth-child('+i+') input');
    items[i-1].indexid=list.id;
    items[i-1].done=list.checked;
    list=document.querySelector('#list-item ul li:nth-child('+i+') label');
    items[i-1].text = list.textContent;
    localStorage.clear();
    localStorage.setItem("items", JSON.stringify(items));
  }
  populateList(items, itemsList);
}

function dragStart(e) {
  //e.preventDefault();
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/plain", null);
  item = e.target;
}

function isBefore(item1, item2) {
    if (item2.parentNode === item1.parentNode)
        for (var cur = item1.previousSibling; cur; cur = cur.previousSibling)
            if (cur === item2)
                return true;
    return false;
}