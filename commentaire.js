let button = document.querySelector('button')
button.addEventListener('click', () =>{
    // var textAreaComment = document.querySelector('textarea')
    // var textAreaComments = textAreaComment.className
    // console.log(textAreaComment);
    // console.log(textAreaComments);

    // var divUnderText = document.querySelector('div')
    // var divUnderTexts = divUnderText.className
    // console.log(divUnderText);
    // console.log(divUnderTexts);

    // var text = textAreaComments.getAttribute
    // divUnderTexts.add(text)

    let commentaire = document.querySelector('#commentaire');
    let comments = document.querySelector('#comments');

    // comments.innerHTML += `<p>${commentaire.value} </p>`

    let p = document.createElement('p');
    p.innerHTML = commentaire.value;
    comments.appendChild(p);
    commentaire.value = '';
})


// function AddCommentaire(){
//     // var textAreaComment = document.querySelector('textarea')
//     // var textAreaComments = textAreaComment.className
//     // console.log(textAreaComment);
//     // console.log(textAreaComments);

//     // var divUnderText = document.querySelector('div')
//     // var divUnderTexts = divUnderText.className
//     // console.log(divUnderText);
//     // console.log(divUnderTexts);

//     // var text = textAreaComments.getAttribute
//     // divUnderTexts.add(text)

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