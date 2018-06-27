bar();

function bar() {
    let w = 0;

    for (var l = 0; l < items.length; l++) {
        console.log(items[l].done)
        if (items[l].done == true)
            w++;
    }
    document.getElementById('inside').style.width = w / items.length * 100 + "%";
}