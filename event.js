let texte = document.querySelector('#texte');

texte.addEventListener('keypress', EventListnerFunction)


function EventListnerFunction(event)
{
    let value = event.key;
    if (value < 'a' || value > 'z')
    {
        event.preventDefault();
        alert('Valeur ne respecte pas les conditions');
    }
}