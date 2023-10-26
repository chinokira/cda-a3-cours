function afficherMessage() {
    alert('hello')
}


var intro = window.document.getElementById('intro')
// console.log(intro);
// console.log(intro.innerHTML);
// console.log(intro.textContent);

var rouges = document.getElementsByClassName('rouge')
// for (const rouge of rouges){
//     console.log(rouge.innerHTML);
// }

var paragraphes = document.getElementsByTagName('p')
// for (const para of paragraphes) {
//     console.log(para.innerHTML);
// }

var notFirstparagraphes = document.querySelectorAll('p:not(:first-child)')
// for (const para of notFirstparagraphes) {
//     console.log(para.innerHTML);
// }

var notFirstparagraphes = document.querySelector('p:not(:first-child)')
// console.log(notFirstparagraphes.innerHTML);

function changerLien() {
    var lien = document.querySelector('a')
    // console.log(lien.getAttribute('href'));
    lien.setAttribute('href', 'http://www.franceinfo.fr')
    lien.innerHTML = "consulter l'actualité"
}

// var lien = document.querySelector('a')
// console.log(lien.getAttribute('href'));
