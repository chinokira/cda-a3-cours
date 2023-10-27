let button = document.querySelector('button')
button.addEventListener('click', AddCommentaire)


function AddCommentaire(){
    let commentaire = document.querySelector('#commentaire');
    let comments = document.querySelector('#comments');

    // comments.innerHTML += `<p>${commentaire.value} </p>`

    let p = document.createElement('p');
    p.innerHTML = commentaire.value;
    comments.appendChild(p);
    commentaire.value = '';
}

// var AddCommentaire = function (){
//     let commentaire = document.querySelector('#commentaire');
//     let comments = document.querySelector('#comments');

//     // comments.innerHTML += `<p>${commentaire.value} </p>`

//     let p = document.createElement('p');
//     p.innerHTML = commentaire.value;
//     comments.appendChild(p);
//     commentaire.value = '';
// }




function somme(a=0,b=0) {
    return a + b;
}
console.log(somme());
console.log(somme(2));
console.log(somme(2, 8));