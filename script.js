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

var premierParagraphe = document.querySelector('p')
// console.log(premierParagraphe.classList);
// console.log(premierParagraphe.className);
var classes = premierParagraphe.classList
// classes.replace('rouge', 'bleu')
// classes.toggle('rouge')
// classes.toggle('bleu')
// console.log(classes.contains('bleu'));
// console.log(classes.contains('rouge'));
// classes.add('bleu', 'gras')



// var lien = document.querySelector('a')
// console.log(lien.getAttribute('href'));


function switchColor()
{
    var paragraphes = document.getElementsByTagName('p')
    for (const paragraphe of paragraphes){
        var classes = paragraphe.classList
        if (classes.contains('rouge')){
            classes.replace('rouge', 'bleu')
        }
        else {
            classes.replace('bleu', 'rouge')
        }
    }
    // var classes = paragraphes.classList
    // if (paragraphes.className = 'rouge')
    // {
    //     classes.toggle('bleu')
    // }
    // classes.toggle('rouge')
}