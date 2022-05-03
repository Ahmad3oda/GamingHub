



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

let gpro = ["media/Gpro.jpg", "headset", "G PRO", "Logitech G PRO.html", "LOGITECH", "★★★★★", "20$", "15% off"];
let CloudFlight = ["media/CloudFlight.jpg", "", "Cloud Flight", "HyperX cloud flight.html", "HyperX", "★★★★", "40$", "15%off"];
let mh751 = ["media/MH  751.jpg", "", "MH 752", "MH751.html", "HyperX", "★★★★★", "50$", "12% off"];
let O = ["media/OnIKumaX2.jpg", "", "ONIKUMA X2", "ONIKUMA X2.HTML", "ONIKUMA", "★★★★", "35%", "10%off"];

















for (let i = 0; i < 7; i++) {
    showdata(gpro);
    showdata(mh751);
    showdata(O);
    showdata(gpro);

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
