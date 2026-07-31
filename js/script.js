     function toggleMenu() {
        const menu = document.getElementById("menu-nav");
        const btn = document.getElementById("btn-hamburguer");
        const overlay = document.getElementById("overlay-menu");

        menu.classList.toggle("aberto");
        btn.classList.toggle("ativo");
        overlay.classList.toggle("ativo");
      }



// Seleciona o container dos mods
const modsGrid = document.querySelector('.mods-grid');

let isDown = false;
let startX;
let scrollLeft;

// Quando o usuário clica com o botão do mouse
modsGrid.addEventListener('mousedown', (e) => {
  isDown = true;
  modsGrid.classList.add('dragging');
  startX = e.pageX - modsGrid.offsetLeft;
  scrollLeft = modsGrid.scrollLeft;
});

// Quando o ponteiro do mouse sai da área dos cards
modsGrid.addEventListener('mouseleave', () => {
  isDown = false;
  modsGrid.classList.remove('dragging');
});

// Quando o usuário solta o botão do mouse
modsGrid.addEventListener('mouseup', () => {
  isDown = false;
  modsGrid.classList.remove('dragging');
});

// Quando o mouse se movimenta enquanto está pressionado
modsGrid.addEventListener('mousemove', (e) => {
  if (!isDown) return; // Se não estiver clicado, não faz nada
  e.preventDefault();
  
  const x = e.pageX - modsGrid.offsetLeft;
  const walk = (x - startX) * 0.8; // O "* 2" ajusta a velocidade do arrasto
  modsGrid.scrollLeft = scrollLeft - walk;
});

const galeriaGrid = document.querySelector('.galeria-carrossel');

let isDownGaleria = false;
let startXGaleria;
let scrollLeftGaleria;

// Quando o usuário clica com o botão do mouse
galeriaGrid.addEventListener('mousedown', (e) => {
  isDownGaleria = true;
  galeriaGrid.classList.add('dragging');
  startXGaleria = e.pageX - galeriaGrid.offsetLeft;
  scrollLeftGaleria = galeriaGrid.scrollLeft;
});

// Quando o ponteiro do mouse sai da área dos cards
galeriaGrid.addEventListener('mouseleave', () => {
  isDownGaleria = false;
  galeriaGrid.classList.remove('dragging');
});

// Quando o usuário solta o botão do mouse
galeriaGrid.addEventListener('mouseup', () => {
  isDownGaleria = false;
  galeriaGrid.classList.remove('dragging');
});

// Quando o mouse se movimenta enquanto está pressionado
galeriaGrid.addEventListener('mousemove', (e) => {
  if (!isDownGaleria) return; // Se não estiver clicado, não faz nada
  e.preventDefault();
  
  const x = e.pageX - galeriaGrid.offsetLeft;
  const walk = (x - startXGaleria) * 0.8; // Velocidade do arrasto
  galeriaGrid.scrollLeft = scrollLeftGaleria - walk;
});

const trilho = document.getElementById('carrossel-trilho');
document.getElementById('btn-next').addEventListener('click', () => trilho.scrollBy({ left: 320, behavior: 'smooth' }));
document.getElementById('btn-prev').addEventListener('click', () => trilho.scrollBy({ left: -320, behavior: 'smooth' }));

const trilhoMods = document.getElementById('carrossel-mods-trilho');
const btnPrevMods = document.getElementById('btn-prev-mods');
const btnNextMods = document.getElementById('btn-next-mods');



if (trilhoMods && btnPrevMods && btnNextMods) {
    btnNextMods.addEventListener('click', () => {
        trilhoMods.scrollBy({ left: 365, behavior: 'smooth' });
    });

    btnPrevMods.addEventListener('click', () => {
        trilhoMods.scrollBy({ left: -365, behavior: 'smooth' });
    });
}