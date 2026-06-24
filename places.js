
const sortSelect = document.getElementById("sortSelect");
const cardsContainer = document.getElementById("allcards");

const originalCards = Array.from(cardsContainer.children);

sortSelect.addEventListener("change", () => {
  let cards = Array.from(cardsContainer.children);


if(sortSelect.value=="ratingLH"){
    cards.sort((a, b) => a.dataset.rating - b.dataset.rating);
}
 else if (sortSelect.value === "ratingHL") {
    cards.sort((a, b) => b.dataset.rating - a.dataset.rating);
  }
   else if (sortSelect.value === "alphaAZ") {
    cards.sort((a, b) => a.dataset.name.localeCompare(b.dataset.name));
  }

  else if (sortSelect.value === "alphaZA") {
    cards.sort((a, b) => b.dataset.name.localeCompare(a.dataset.name));
  }

  else if (sortSelect.value === "Sort") {
    cards = originalCards;
  }

  cardsContainer.innerHTML = "";


  cards.forEach(card => cardsContainer.appendChild(card));
});
document.addEventListener("DOMContentLoaded", () => {
const searchinput=document.getElementById("searchinput");
const searchbutton=document.getElementById("searchbutton");
const cards = document.querySelectorAll(".cards");

function searchPlaces(){
    const query = searchinput.value.toLowerCase();
    cards.forEach(card => {
        const name=card.dataset.name.toLowerCase();
        if(name.includes(query)) {
            card.style.display="block";
        }
        else {
      card.style.display = "none";
    }

    })};
     searchbutton.addEventListener("click", () => {
    searchPlaces();
      });

});