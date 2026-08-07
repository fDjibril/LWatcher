
const body = document.body;

const btnInfo = document.getElementById('infosite');
const btnFermInfo = document.getElementById('fermInfom');
const cardInfo = document.getElementById('ifom');

btnInfo.addEventListener('click', function () {
   setTimeout(() => {
        cardInfo.style.display = 'block';
   }, 300);
});
btnFermInfo.addEventListener('click', function () {
    setTimeout(() => {
         cardInfo.style.display = 'none'; 
    }, 200);
});


const animeCard = document.getElementById('animeCard');
const filmCard  = document.getElementById('filmCard' );
const bookCard  = document.getElementById('livreCard');

const afterWatch = document.getElementById('afterseen');

animeCard.addEventListener('click', function() {
     setTimeout(() => {
          window.location.href = "anime.html";
     }, 500);
});

filmCard.addEventListener('click', function() {
     setTimeout(() => {
          window.location.href = "film.html";
     }, 500);
});

bookCard.addEventListener('click', function() {
     setTimeout(() => {
          window.location.href = "livre.html";
     }, 500);
});

afterWatch.addEventListener('click', function () {
     setTimeout(() => {
          window.location.href = "tard.html";
     }, 500);
});