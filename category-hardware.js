



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

let r3 = ["media/mblTTVU7zC5IlLBlHrq545Ia56Z5Gbi7QfZSTFrKjS7nEmILBwe0ouRuw9KUxZXJlpD3LzupaAFyBvejF8x-550x550.jpg", "", "AMD RYZEN 3", "AMD RYZEN 3  .HTML", "AMD", "★★★", "200$", "15% off"];
let i3 = ["media/SxrXzZx96MspPb5549QsZ1lAc9mJVNhStcC4ebJCwP-550x550 (1).png", "", "intel core i3", "Intel Core i3 .HTML", "intel", "★★★★", "160$", "15%off"];
let rx6700 = ["media/1Qaevb1RX8KZMIZaiew6T4sf5KaGfkr8wpLECEZ-550x550w.jpg", "", "RX 6700 XT", "RX 6700 XT.HTML", "AMD", "★★★", "350$", "12% off"];















for (let i = 0; i < 6; i++) {
    showdata(r3);
    showdata(i3);
    showdata(rx6700);

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
