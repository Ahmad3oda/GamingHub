



let card = document.querySelector(".container");

function showdata([img, product, category, link, brand, rate, price, offer]) {
    let code = `
<div class="card">
         <img src="${img}" alt="${product}" >
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

let fifa21 = ["media/fifa-21-stand1.jpg", "", "FIFA 21", "Fifa 21.html", "EA Sports", "★★★★", "20$", "15% off"];
let fifa22 = ["media/FIFA-22-Main-Image-1200x675.jpg", "", "FIFA 22", "Fifa 22.html", "EA Sports", "★★★★", "40$", "15%off"];
let nfl = ["media/nfl1.jpg", "", "NFL 22", "NFL 22.html", "EA Sports", "★★★★", "50$", "12% off"];
let nfsh = ["media/nfsheat.jpg", "", "Need For Speed Heat", "need for speed heat.HTML", "EA Sports", "★★", "35%", "10%off"];
















for (let i = 0; i < 6; i++) {
    showdata(fifa21);
    showdata(fifa22);
    showdata(nfsh);
    showdata(nfl);

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
