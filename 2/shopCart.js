function init() {
var desc = '<div class=itemshop>';
for (var i = 0; i < items.length; i++) {
    desc+='<div class=item>';
    desc+='<img src='+items[i].img+'><br>';
    desc+=items[i].name+'<br>';
    desc+='Цена: '+items[i].price+'<br>';
    desc+='<button class=toCart data-id='+i+'>В корзину</button>';
    itemBtn = document.getElementById("button");
    itemBtn.onclick = addItem;
    desc+='</div>';
}
desc += '</div>';
document.getElementById('shop').innerHTML = desc;
}

var cart = [];
var sum = 0;

function addItem(obj){
    var selectedItem = itemsArray[obj.target.id.split("_")[1]];
    var selectedItems = document.getElementsByClassName("selected_items")[0];
    var tr = selectedItems.insertRow(-1);
    var td = tr.insertCell(-1);
    td.appendChild(document.createTextNode(selectedItem.name));
    var td = tr.insertCell(-1);
    td.style.textAlign = "center";
    td.style.width = "100px";
    td.appendChild(document.createTextNode("Цена: " + selectedItem.price + "\u20bd"));

    sum += selectedItem.price;
    document.getElementsByClassName("sum")[0].textContent = "Sum: " + sum + "\u20bd";
}

window.onload = init;