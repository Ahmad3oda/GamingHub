



let card = document.querySelector(".container");

function showdata([img, product, category, link, brand, rate, price, offer]) {
    let code = `
<div class="card">
         <img src="${img}" alt="${product}">
         <div class="text">
             
             <a href="${link}" style="text-decoration:none " > <p class="category">${category}</p></a>
             <p class="name">${brand}</p>

             <h5 class="rate">${rate}</h5>
             <p class="price">${price}</p>
             <p class="sale">${offer}</p>
         </div>
     </div>
`;
    card.innerHTML += code;
}
//links

//  ../page(2)-item-page/FANTECH RAIGOR II/FANTECH RAIGOR II.html



//////arrays

let sk620 = ["media/SK620.jpg", "keyboard", "SK620", "sk620.html", "Cooler Master", "★★★★", "20$", "15% off"];
let k592 = ["media/K592.jpg", "keyboard", "k592", "K952.html", "Redragon", "★★★", "40$", "15%off"];
let k555 = ["media/k555.jpg", "keyboard", "K555", "K555.html", "Redragon", "★★★★★", "50$", "12% off"];
let K613 = ["media/K613.jpg", "keyboard", "K613", "K613.html", "Redragon", "★★", "35%", "10%off"];
let hyperXalloy = ["media/hyperx alloy.jpg", "keyboard", "HyperX Alloy", "HyperX Alloy.html", "HyperX", "★★★", "20%", "20%off"];


for (let i = 0; i < 6; i++) {
    showdata(sk620);
    showdata(k555);
    showdata(k592);
    showdata(hyperXalloy);
    showdata(K613);

}

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
