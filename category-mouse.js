



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

let AJ390 = ["media/AJ390 2.jpg", "mouse", "AJ390", "AJ390.html", "AJAZZ", "★★", "20$", "15% off"];
let mm711 = ["media/mm711 2.jpg", "mouse", "mm711", "MM711.html", "Cooler Master", "★★★★", "40$", "15%off"];
let G903 = ["media/G903 2.jpg", "mouse", "G903", "G903.html", "LOGITECH", "★★★★★", "50$", "12% off"];
let KatarPro = ["media/Katar pro2.jpg", "mouse", "Katar Pro", "KATAR PRO.HTML", "Corsair", "★★★★", "35%", "10%off"];
let glorious = ["media/glorious 2.jpg", "mouse", "glorious", "glorious.html", "Golorious", "★★★", "20%", "20%off"];
let FANTECHRAIGORII = ["media/FANTECH RAIGOR II 2.jpg", "mouse", "FANTECH RAIGOR", "FANTECH RAIGOR II.html", "FANTECH", "★★", "10$", "4% off"];
















for (let i = 0; i < 6; i++) {
    showdata(AJ390);
    showdata(mm711);
    showdata(G903);
    showdata(KatarPro);
    showdata(glorious);
    showdata(FANTECHRAIGORII);

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
