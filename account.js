let name = window.localStorage.getItem('txt');

let pass = window.localStorage.getItem('pass');

let email = window.localStorage.getItem('mail');

document.getElementById('name').innerHTML = name;
document.getElementById('email').innerHTML = email;
document.getElementById('pass').innerHTML = pass;

console.log(name);
console.log(pass);
console.log(email);

var icon = document.getElementById("icon");
let bg = document.getElementById("foot");

if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "light");
}


let localData = localStorage.getItem("theme");

if (localData == "light") {
    icon.src = "media/sun.png";
    document.body.classList.remove("dark_theme");
    bg.style.backgroundImage = "url('media/foot_img.jpg')";
}
else if (localData == "dark") {
    icon.src = "media/moon.png";
    document.body.classList.add("dark_theme");
    bg.style.backgroundImage = "url('media/w_foot_img.jpg')";
}

icon.onclick = function () {
    document.body.classList.toggle("dark_theme");
    if (document.body.classList.contains("dark_theme")) {
        icon.src = "media/moon.png";
        bg.style.backgroundImage = "url('media/w_foot_img.jpg')";
        localStorage.setItem("theme", "dark");
    }
    else {
        icon.src = "media/sun.png";
        bg.style.backgroundImage = "url('media/foot_img.jpg')";
        localStorage.setItem("theme", "light");
    }
}

