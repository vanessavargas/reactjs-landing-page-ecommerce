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

//pop-up
function openPopup() {
  var popup = document.getElementById("details");
  popup.classList.toggle("show");
}

function openPopup2() {
  var popup2 = document.getElementById("details2");
  popup2.classList.toggle("show");
}

function openPopup3() {
  var popup3 = document.getElementById("details3");
  popup3.classList.toggle("show");
}

function openPopup4() {
  var popup4 = document.getElementById("details4");
  popup4.classList.toggle("show");
}

function openPopup5() {
  var popup5 = document.getElementById("details5");
  popup5.classList.toggle("show");
}

function openPopup6() {
  var popup6 = document.getElementById("details6");
  popup6.classList.toggle("show");
}

function openPopup7() {
  var popup7 = document.getElementById("details7");
  popup7.classList.toggle("show");
}

function openPopup8() {
  var popup8 = document.getElementById("details8");
  popup8.classList.toggle("show");
}
