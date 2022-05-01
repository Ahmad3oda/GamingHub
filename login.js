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

function solve() {
    var x = document.getElementById("password");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");

    if (x.type === 'password') {
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";

    }

}
function save(){
    let name, password;
name = document.getElementById("name").value;
password = document.getElementById("password").value;

localStorage.setItem("name",name)
localStorage.setItem("password",password)

}