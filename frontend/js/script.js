const btn = document.querySelector('#generateBtn');
const zone = document.querySelector('.zone-citation');

/*btn.addEventListener('click', () => {
    zone.textContent = 'Citation ajoutée!';
    preventDefault();
    // Your code here
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
   
