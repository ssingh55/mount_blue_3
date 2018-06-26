reindex();
function reindex() {
	var temp = [];
	var itm1 = JSON.parse(localStorage.getItem("items"));
	if(itm1 == null)
		return;
	for(var i=0;i<itm1.length;i++){
		var obj = {
			text:itm1[i].text,
			done: itm1[i].done,
			indexid: "item"+i
		}
		temp.push(obj);
	}
	console.log(temp);
	items = temp;
}