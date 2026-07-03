const btn = document.querySelector('#generateBtn');
const zone = document.querySelector('.zone-citation');

btn.addEventListener('click', () => {
    zone.textContent = 'Citation ajoutée!';
    preventDefault();
    // Your code here
});
