

const infoAnime = document.getElementById('infoAnim');
const afficheCadre = document.getElementById('btnAffCardList');
const cardreAnime = document.getElementById('affcadreAnimes');
const fermCadreAnime = document.getElementById('fermeCadreAnime');
const infoSurAnimePart = document.getElementById('ifom');
const fermeInfoPart = document.getElementById('fermInfom');

const fileInpute = document.getElementById('fileAnimes');
const btnAddImg = document.getElementById('btnAddImgAnime');
const gallerieCadres = document.getElementById('galleriesAnimes');
const nomAnim = document.getElementById('nameAnime');
const validerNom = document.getElementById('ValidNameAnime');


// affiche add img
afficheCadre.addEventListener('click', function() {
    setTimeout(() => {
        cardreAnime.style.display = 'block';
    }, 300);
});
fermCadreAnime.addEventListener('click', function() {
    setTimeout(() => {
        cardreAnime.style.display = 'none';
    }, 300);
});

// affiche information sur anime part
infoAnime.addEventListener('click', function() {
    setTimeout(() => {
        infoSurAnimePart.style.display = 'block';
    }, 300);
});
fermeInfoPart.addEventListener('click', function() {
    setTimeout(() => {
        infoSurAnimePart.style.display = 'none';
    }, 300);
});

// ajout de photo programmat...

btnAddImg.addEventListener('click', function() {
    fileInpute.click();
});

let imageStockee = '';

fileInpute.addEventListener('change', function (event) {
    const file = event.target.files[0];

    if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = (e) => {
                imageStockee = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

function creerCarte(carte) {

    const btndeleteCadre = document.createElement('button');
    btndeleteCadre.className = 'btndletecadre';

    const GrdCadre = document.createElement('div');
    GrdCadre.className = 'grandcadre';

    btndeleteCadre.addEventListener('click', function() {
        setInterval(() => {
            gallerieCadres.removeChild(GrdCadre);
            cartes = cartes.filter(c => c.nom !== carte.nom);
            localStorage.setItem("sauvegardeFilms", JSON.stringify(cartes));
        }, 300);
    });

    const cdresAnm = document.createElement('div');
    cdresAnm.className = 'completImgAnime';

    const ttleAnm = document.createElement('h3');
    ttleAnm.textContent = carte.nom;

    const img = document.createElement('img');
    img.src = carte.image;


    GrdCadre.appendChild(btndeleteCadre);
    GrdCadre.appendChild(cdresAnm);
    cdresAnm.appendChild(img);
    cdresAnm.appendChild(ttleAnm);
    gallerieCadres.appendChild(GrdCadre);
}

let cartes = JSON.parse(localStorage.getItem("sauvegardeFilms")) || [];

cartes.forEach(carte => {
    creerCarte(carte);
});


validerNom.addEventListener('click', () => {

    if (nomAnim.value.trim() !== '') {

        const carte = {
            nom : nomAnim.value,
            image : imageStockee
        };

        cartes.push(carte);
        creerCarte(carte);
        localStorage.setItem("sauvegardeFilms", JSON.stringify(cartes));

        nomAnim.value = '';
        fileInpute.value = '';
        imageStockee = '';
        
    }
});