var opt = document.getElementById('menu');
var fetch_list = new XMLHttpRequest();
fetch_list.open('GET','https://davids-restaurant.herokuapp.com/menu_items.json');
console.log("true");
fetch_list.onload = function(){
    var items = JSON.parse(fetch_list.responseText);
    p =items.menu_items;
    console.log(p[10].short_name);
    console.log(items.menu_items[2].name);
    for(var i = 0; i < items['menu_items'].length; i++){
        opt.innerHTML=opt.innerHTML + "<option>"+items['menu_items'][i].name +"</option>";
    }
    
};
var p;
function Menuordered(){
  var d = opt.selectedIndex -1 ;
  console.log(d);
  console.log(p[d].name);
  document.getElementById('s_name').innerHTML= p[d].short_name ;
  document.getElementById('name').innerHTML= p[d].name ;
  document.getElementById('Des').innerHTML= p[d].description;
  document.getElementById('small').innerHTML= p[d].price_small ;
  document.getElementById('large').innerHTML= p[d].price_large ;
  document.getElementById('small_p').innerHTML= p[d].small_portion_name ;
  document.getElementById('large_p').innerHTML= p[d].large_portion_name ;
  
}

fetch_list.send();
