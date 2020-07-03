var param = getCookie( "basket" );
var count,goods;
for( var i = 0; i < count; i++ ) {
pos = param.indexOf( ',' );
if( pos == -1 ) break;
orders[i] = parseInt( param.substring ( -1, pos ) );
param = param.substring ( pos+1 );
} window.onload = function() {
var table = createTable(goods);
document.getElementById("shop").appendChild(table);
}

function updateTable()
{
var totalGoods = 0;
var totalCosts = 0;
var basket = "";
for ( var i = 0; i < count; i++ ) {
var item = document.getElementById( "item"+i );
var cnt = parseInt( item.value );
if (isNaN(cnt) || cnt < 0 ) {
cnt = 0;
item.value = "0";
}
if ( cnt > 0 )
item.parentNode.parentNode.setAttribute("bgcolor", "lightblue");
else
item.parentNode.parentNode.removeAttribute("bgcolor")
orders[i] = cnt;
basket = basket + cnt + ",";
totalGoods = totalGoods + cnt;
totalCosts = totalCosts + cnt*goods[i][3];
}
var span = document.getElementById("totalGoods");
var newTextNode = document.createTextNode(totalGoods);
span.replaceChild(newTextNode, span.firstChild);
var span = document.getElementById("totalCosts");
var newTextNode = document.createTextNode(totalCosts);
span.replaceChild(newTextNode, span.firstChild);

setCookie("basket", basket);
}function createTable(data) {
var table = document.createElement("table");
table.setAttribute("border", "1");
table.setAttribute("cellspacing", "0");
table.setAttribute("cellpadding", "2");
var thead = document.createElement("thead");
var tr = document.createElement("tr");
tr.setAttribute("bgcolor", "lightgrey");
var head = new Array("Код","Наименование","Описание","Стоимость","Количество");
for (var i = 0; i < head.length; i++) {
var th = document.createElement("th");
var newText = document.createTextNode(head[i]);
th.appendChild(newText);
tr.appendChild(th);
}
thead.appendChild(tr);
table.appendChild(thead);var totalGoods = 0;
var totalCosts = 0.0;

var orders;
var tbody = document.createElement("tbody");
for (var i = 0; i < 10; i++) { //тут data.length
var tr = document.createElement("tr");
if ( 1 > 0 ) tr.setAttribute("bgcolor", "lightblue");
for (var j=0; j < data[i].length; j++) { //data[i].length
var td = document.createElement("td");
var newText = document.createTextNode(data[i][j]);
td.appendChild(newText);
tr.appendChild(td);
}
var td = document.createElement("td");
var newInput = document.createElement("input");
newInput.setAttribute("type", "text");
newInput.setAttribute("id", "item"+i);
newInput.setAttribute("value", orders[i]);
newInput.setAttribute("size", "3");
newInput.onblur = updateTable;
td.appendChild(newInput);
tr.appendChild(td);
tbody.appendChild(tr);totalGoods = totalGoods + orders[i];
totalCosts = totalCosts + orders[i]*goods[i][3];
}
var tr = document.createElement("tr");
var td = document.createElement("td");
td.setAttribute("colspan", "3");
td.setAttribute("align", "right");
var textNode = document.createTextNode("Итого:");
td.appendChild(textNode);
tr.appendChild(td);
var td = document.createElement("td");
var span = document.createElement("span");
span.setAttribute("id", "totalCosts");
var textNode = document.createTextNode(totalCosts);
span.appendChild(textNode);
td.appendChild(span);
tr.appendChild(td);
var td = document.createElement("td");
var span = document.createElement("span");
span.setAttribute("id", "totalGoods");
var textNode = document.createTextNode(totalGoods);
span.appendChild(textNode);
td.appendChild(span);
tr.appendChild(td);
tbody.appendChild(tr);table.appendChild(tbody);
return table;
}function setCookie(name,value)
{
document.cookie = name + '=' + value;
}function getCookie(name)
{
var arg = name + "=";
startpos = document.cookie.indexOf(arg, 0);
if (startpos == -1)
return "";
else
startpos += arg.length;
endpos = document.cookie.indexOf(';', startpos);
if (endpos == -1) endpos = document.cookie.length;
return document.cookie.substring(startpos, endpos);
}