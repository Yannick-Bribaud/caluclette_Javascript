//DOM
const touches = [...document.querySelectorAll('.bouton')];
const listeKeyCode = touches.map(touche => touche.dataset.key)

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString;
    console.log(valeur);
})
