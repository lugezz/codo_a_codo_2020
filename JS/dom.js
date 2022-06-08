const div = document.createElement("div");
div.id = "page";
div.className = "data";
div.style = "color:red";

div.innerHTML = "Esto es un div creado por JS";

div.textContent = "Esto es otro div creado por JS";

const img = document.createElement("img");
img.src = 	"https://lenguajejs.com/assets/logo.svg";
img.alt = "Logo Javascript";
img.width="300";
img.height="300"; 

div.appendChild(img);
document.body.appendChild(div);

const button = document.querySelector("button");
button.onclick = () => alert("Hello");

function checkCookies() {
    var text = "";
    if (navigator.cookieEnabled == true) {
        text = "Cookies are enabled.";
    } else {
        text = "Cookies are not enabled.";
    }
    document.getElementById("demo").innerHTML = text;
}



