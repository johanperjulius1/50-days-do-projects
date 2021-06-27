const cards = document.querySelectorAll('.card')

cards.forEach((card)=>{
card.addEventListener('click',()=>{
    cards.forEach((card) => {
        card.setAttribute('class', 'card')
    })
    card.setAttribute('class', 'card active')
})
})