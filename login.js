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

let nameInput = document.getElementById("[name='username']");
let emailInput = document.getElementById("[name='email']");
let phoneInput = document.getElementById("[name='phone']");
let messageInput = document.getElementById("[name='message']");





document.forms[0].onsubmit = function(v){

    namevalid = false;
    emailvalid = false ;
    phonevalid = false;
    messagevalid = false;

    if (nameInput.value != ""){
        namevalid = true;
    }
    if ( emailInput.value != ""){
        emailvalid = true;
    }
    if (phoneInput.value != ""){
        phonevalid = true;
    }
    if (messageInput.value != ""){
        messagevalid = true;
    }

    if ( namevalid === false || emailvalid === false || phonevalid === false || messagevalid === false){
        v.preventDefault();
    }


};
function solve(){
    alert("The Operation is Sccusseful");
}