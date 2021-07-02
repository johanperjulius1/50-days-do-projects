const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  console.log('hello')
  card.addEventListener("click", () => {
    console.log('hi')
    cards.forEach((card) => {
      console.log('hej')
      card.setAttribute("class", "card");
    });
    console.log('då')
    card.setAttribute("class", "card active");
  });
});
