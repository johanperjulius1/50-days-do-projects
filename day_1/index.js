const cards = document.querySelectorAll('.card')

// On click event for each section
cards.forEach((card)=>{
card.addEventListener('click',()=>{
    // remove active class from all another section
    // and add it to the selected section
    cards.forEach((card) => {
        card.classList.remove('active')
    })
    card.classList.add('active')
})
})