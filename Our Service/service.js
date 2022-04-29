var icon = document.getElementById("icon");
let bg = document.getElementById("foot");

if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme","light");
}


let localData = localStorage.getItem("theme");

if(localData == "light"){
    icon.src ="sun.png";
    document.body.classList.remove("dark_theme");
    bg.style.backgroundImage  ="url('foot_img.jpg')";
}
else if(localData == "dark"){
    icon.src ="moon.png";
    document.body.classList.add("dark_theme");
    bg.style.backgroundImage  ="url('w_foot_img.jpg')";
}

icon.onclick = function(){
    document.body.classList.toggle("dark_theme");
    if(document.body.classList.contains("dark_theme")){
        icon.src = "moon.png";
        bg.style.backgroundImage  ="url('w_foot_img.jpg')";
        localStorage.setItem("theme","dark");
    }
    else{
        icon.src ="sun.png";
        bg.style.backgroundImage  ="url('foot_img.jpg')";
        localStorage.setItem("theme","light");
    }
}