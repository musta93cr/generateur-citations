/*const btn = document.querySelector('#generateBtn');
const zone = document.querySelector('.zone-citation');

/*btn.addEventListener('click', () => {
    zone.textContent = 'Citation ajoutée!';
    preventDefault();
    
});*/
/*function generateCitation() {
    let listCitation = ["citation 1", "citation 2", "citation 3", 
    "citation 4", "citation 5"];
    let randomIndex = Math.floor(Math.random() * listCitation.length);
    zone.textContent = listCitation[randomIndex];}
    /*listCitation.length renvoie le nbre d'éléments dans le tableau, Math.random() renvoie un nombre aléatoire entre 0 et 1, Math.floor() 
    arrondit le nombre de math.random() à l'entier inférieur le plus proche.donc si math.random() renvoie 0.5,on fera 0.5*5=2.5, 
    et math.floor(2.5)=2, donc on aura l'index 2 du tableau listCitation, qui est "citation 3" qui correspondra a la variable randomIndex
    et zone.textContent = listCitation[randomIndex] affichera "citation 3" dans la zone de citation.

    */
   let historique = [];
   if (localStorage.getItem('historique')){
    historique = JSON.parse(localStorage.getItem('historique'));
   }
    else {
    historique = [];
    }
    
    const btn = document.querySelector('#generateBtn');
    const zone = document.querySelector('.zone-citation');
    const copyBtn = document.querySelector('#copyBtn');
    btn.addEventListener('click',() => {
        generateCitation();
    });

    copyBtn.addEventListener('click', () => {
        const citation = zone.textContent;
        if (!citation) {
            alert('Aucune citation à copier!');
            return;
        } // Vérifie si la zone de citation est vide
        navigator.clipboard.writeText(citation);
        copyBtn.textContent = 'Citation copiée!';
        setTimeout(() => {
            copyBtn.textContent = 'Copier la citation';
        }, 2000);
    });

    function addToHistory(citation) {
       // const content = `"${citation.content}" — ${citation.author}`;
        historique.push(
            {
                text: citation.content,
                author: citation.author
            }
        );
        console.log(historique);
        localStorage.setItem('historique', JSON.stringify(historique));
    };
    
    function displayHistory() {
       const container = document.querySelector('#historyContainer');
         container.innerHTML = historique
         .map(citation => `<p>"${citation.text}" — ${citation.author}</p>`)
            .join(''); // Clear previous history
        
    }
    displayHistory(); // Display history on page load
    

async function generateCitation() {
    try {zone.classList.add('fade');
        zone.textContent = "Chargement...";
        const response = await fetch('https://dummyjson.com/quotes/random');
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération de la citation");
        }
        const data = await response.json();
        setTimeout(() => {
            zone.classList.remove('fade');
            zone.textContent = `"${data.content}" — ${data.author}`;
            addToHistory(data);
        }, 300); // Ajout d'un délai de 300ms pour permettre à l'animation de se produire
       
    } catch (error) {
       zone.textContent = 'impossible de générer une citation. Veuillez réessayer plus tard.';
    }
 }
  
/*
// Tableau qui va contenir toutes les citations de l'utilisateur
let historique = [];

// On vérifie si un historique existe déjà dans le localStorage
if (localStorage.getItem('historique')) {

    // Si oui, on récupère la chaîne JSON et on la transforme en tableau JavaScript
    historique = JSON.parse(localStorage.getItem('historique'));

} else {

    // Sinon, on initialise un tableau vide
    historique = [];
}

// On récupère le bouton dans le DOM (HTML)
const btn = document.querySelector('#generateBtn');

// On récupère la zone où afficher la citation
const zone = document.querySelector('.zone-citation');

// On ajoute un événement au clic sur le bouton
btn.addEventListener('click', () => {

    // Quand on clique, on lance la génération de citation
    generateCitation();
});

// Fonction qui ajoute une citation dans l'historique
function addToHistory(citation) {

    // On peut construire une version lisible (non utilisée ici mais utile)
    const content = `"${citation.content}" — ${citation.author}`;

    // On ajoute la citation dans le tableau historique
    historique.push({
        text: citation.content,
        author: citation.author
    });

    // On affiche le tableau dans la console (pour debug)
    console.log(historique);

    // On sauvegarde le tableau mis à jour dans le localStorage
    localStorage.setItem('historique', JSON.stringify(historique));
}

// Fonction asynchrone pour récupérer une citation depuis une API
async function generateCitation() {

    try {
        // On ajoute une classe CSS pour lancer une animation
        zone.classList.add('fade');

        // On affiche un message temporaire
        zone.textContent = "Chargement...";

        // On appelle l'API pour récupérer une citation aléatoire
        const response = await fetch('https://dummyjson.com/quotes/random');

        // Si la réponse n'est pas correcte, on déclenche une erreur
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération de la citation");
        }

        // On transforme la réponse JSON en objet JavaScript
        const data = await response.json();

        // Petit délai pour laisser l'animation s'exécuter
        setTimeout(() => {

            // On retire l'animation
            zone.classList.remove('fade');

            // On affiche la citation dans la page
            zone.textContent = `"${data.content}" — ${data.author}`;

            // On ajoute la citation à l'historique
            addToHistory(data);

        }, 300);

    } catch (error) {

        // Si une erreur arrive, on affiche un message d'erreur
        zone.textContent = 'Impossible de générer une citation. Veuillez réessayer plus tard.';
    }
}*/