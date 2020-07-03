var desc = '<div class=itemshop>';
for (var i = 0; i < items.length; i++) {
    desc+='<div class=item>';
    desc+='<img src='+items[i].img+'><br>';
    desc+=items[i].name+'<br>';
    desc+='Цена: '+items[i].price+'<br>';
    desc+='<button class=toCart data-id='+i+'>В корзину</button>';
    desc+='</div>';
}
desc += '</div>';
document.getElementById('shop').innerHTML = desc;

var cart = [];