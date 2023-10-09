document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const ARTICLE_ELEMENT = button.parentElement.parentElement;
        
        if ( ARTICLE_ELEMENT.classList.contains('open') ) {
            ARTICLE_ELEMENT.removeAttribute('class');
            ARTICLE_ELEMENT.querySelector('i').classList.replace('fa-minus-square', 'fa-plus-square');
        } else {
            ARTICLE_ELEMENT.className = 'open';
            ARTICLE_ELEMENT.querySelector('i').classList.replace('fa-plus-square', 'fa-minus-square');
        }
    })
})