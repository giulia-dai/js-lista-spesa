let spesaArray = [
    'pasta',
    'pane',
    'frutta',
    'latte',
    'verdure',
    'nutella'
]
console.log (spesaArray);
const listaUlDom = document.getElementById('listaUl');

i = 0;
while (i < spesaArray.length){
    listaUlDom.innerHTML += `<li>${spesaArray[i]}</li>`;
    i++;
}
