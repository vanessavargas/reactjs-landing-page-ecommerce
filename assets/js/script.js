//slider
let time = 5000,
  currentImageIndex = 0,
  images = document.querySelectorAll("#slider img");
max = images.length;

function nextImage() {
  images[currentImageIndex].classList.remove("selected");
  currentImageIndex++;

  if (currentImageIndex >= max) currentImageIndex = 0;
  images[currentImageIndex].classList.add("selected");
}
//trocar de imagem
function start() {
  setInterval(() => {
    nextImage();
  }, time);
}
window.addEventListener("load", start);

//cadastro newsletter
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let data = {
    nome,
    email,
  };
  let convertData = JSON.stringify(data);
  localStorage.setItem("lead", convertData);
  let content = document.getElementById("content");

  function loading() {
    $(".load").css("display", "none");
  }
  let carregando = `<p>Loading...</p>`;
  let pronto = `<p>Cadastro realizado com sucesso!</p>`;

  content.innerHTML = carregando;
  setTimeout(() => {
    content.innerHTML = pronto;
  }, 1000);
});
