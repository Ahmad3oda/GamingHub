var icon = document.getElementById("icon");
let bg = document.getElementById("foot");

if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme","light");
}


let localData = localStorage.getItem("theme");

if(localData == "light"){
    icon.src ="media/sun.png";
    document.body.classList.remove("dark_theme");
    bg.style.backgroundImage  = "url('media/foot_img.jpg')";
}
else if(localData == "dark"){
    icon.src ="media/moon.png";
    document.body.classList.add("dark_theme");
    bg.style.backgroundImage  ="url('media/w_foot_img.jpg')";
}

icon.onclick = function(){
    document.body.classList.toggle("dark_theme");
    if(document.body.classList.contains("dark_theme")){
        icon.src = "media/moon.png";
        bg.style.backgroundImage  ="url('media/w_foot_img.jpg')";
        localStorage.setItem("theme","dark");
    }
    else{
        icon.src ="media/sun.png";
        bg.style.backgroundImage  ="url('media/foot_img.jpg')";
        localStorage.setItem("theme","light");
    }
}

let container = document.createElement('div');
let names=['Ebrahim mohamed','Ahmed ouda','Ebrahim osama','Ahamed EL-said','Mahmoud mohamed taha','Ahmed gamal','Ahmed ashraf'] ; let ages=['19','19','19','19','19','19','19'] ; 
let imaggs=['ebra osama.jpg'];
doucument.body.appendChild(container);
container.style.align=' center' ;
function cards(names , ages ,imaggs)
{ //Identify Main Elements
let card = document.createElement('div');
let title = document.createElement('h2');
let age = document.createElement('p');
let img = document.createElement('img');
//Identify elements for the containers
let head = document.createTextNode(names);
let ageNo = document.createElement(ages) ;
let imgs = document.createElement(imggs) ;
title.appendChild(head);
age.appendChild(ageNo);
//Style of the card
card.style.width = '200px'; img.style.width = '100%' ;
card.style.color = 'white' ; card.style.padding = '10px' ;
card.style.margin = '10px' ; card.style.display ='inline-block' ;
//Place each element in container
card.appendChild(title);
card.appendChild(age);
card.appendChild(img);
container.appendChild(card)
}
for(i=0;i<7;i++){
    card(names[i],ages[i])
}
