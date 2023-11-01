const btnBr = document.getElementById("br");
const btnEn = document.getElementById("eng");
const hi = document.querySelector(".hi span");
const name = document.getElementById("name");
const dev = document.getElementById("dev");

btnBr.addEventListener("click", function () {
  if (btnBr.click) {
    btnBr.style.color = "#FF4444";
    btnEn.style.color = "white";
  }
});

btnEn.addEventListener("click", function () {
  if (btnEn.click) {
    btnBr.style.color = "white";
    btnEn.style.color = "#FF4444";
  }
});

btnBr.addEventListener("click", () => {
  hi.innerHTML = "Oi";
  name.innerHTML = `Meu nome é <span>Bruno</span>`;
  dev.innerHTML = "Eu sou um desenvolvedor:";
});

btnEn.addEventListener("click", () => {
  hi.innerHTML = "Hi";
  name.innerHTML = "My name is <span>Bruno</span>";
  dev.innerHTML = "I am a developer:";
});
