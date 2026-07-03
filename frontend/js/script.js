const btn = document.querySelector('#generateBtn');
const zone = document.querySelector('.zone-citation');

/*btn.addEventListener('click', () => {
    zone.textContent = 'Citation ajoutée!';
    preventDefault();
    
});*/
function generateCitation() {
    let listCitation = ["citation 1", "citation 2", "citation 3", 
    "citation 4", "citation 5"];
    let randomIndex = Math.floor(Math.random() * listCitation.length);
    zone.textContent = listCitation[randomIndex];}
    /*listCitation.length renvoie le nbre d'éléments dans le tableau, Math.random() renvoie un nombre aléatoire entre 0 et 1, Math.floor() 
    arrondit le nombre de math.random() à l'entier inférieur le plus proche.donc si math.random() renvoie 0.5,on fera 0.5*5=2.5, 
    et math.floor(2.5)=2, donc on aura l'index 2 du tableau listCitation, qui est "citation 3" qui correspondra a la variable randomIndex
    et zone.textContent = listCitation[randomIndex] affichera "citation 3" dans la zone de citation.

    */
   btn.addEventListener('click',() => {
    generateCitation();
   });
   async function generateCitation() {
    try {zone.classList.add('fade');
        zone.textContent = "Chargement...";
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        setTimeout(() => {
            zone.classList.remove('fade');
            zone.textContent = `"${data.content}" — ${data.author}`;
        }, 300); // Ajout d'un délai de 300ms pour permettre à l'animation de se produire
       
    } catch (error) {
       zone.textContent = 'impossible de générer une citation. Veuillez réessayer plus tard.';
    }
   }
   // Fonction asynchrone pour générer une citation depuis une API
// try = bloc principal, catch = gestion des erreurs
// Ajout d’une animation + message de chargement
// fetch + await = récupération des données de l’API
// JSON = conversion des données en objet JS
// setTimeout = petit délai pour fluidifier l’affichage
// Affichage de la citation + auteur dans la zone
// Retrait de l’animation après affichage
// En cas d’erreur : message d’erreur + suppression animation
