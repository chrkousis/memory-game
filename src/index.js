document.addEventListener("DOMContentLoaded", () => {
//cards

const cards= [
    {name:"fries",
    img:"src/images/fries.png",
},
{
    name:"cheeseburger",
    img:"src/images/cheeseburger.png",
},
{
    name:"ice-cream",
    img:"src/images/ice-cream.png",
},
{
    name:"pizza",
    mg:"src/images/pizza.png",
},
{
    name:"milkshake",
    img:"src/images/milkshake.png",
},
{
    name:"hotdog",
    img:"src/images/hotdog.png",
},
{name:"fries",
    img:"src/images/fries.png",
},
{
    name:"cheeseburger",
    img:"src/images/cheeseburger.png",
},
{
    name:"ice-cream",
    img:"src/images/ice-cream.png",
},
{
    name:"pizza",
    img:"src/images/pizza.png",
},
{
    name:"milkshake",
    img:"src/images/milkshake.png",
},
{
    name:"hotdog",
    img:"src/images/hotdog.png",
},
]

cards.sort(() => 0.5 - Math.random())
console.log(cards)


const grid = document.querySelector(".grid")
let cardsChosen = []
let cardsChosenIds = []



function createboard(){
for (let i = 0; i < cards.length; i++){
    const card = document.createElement("img")
    card.setAttribute("src", "src/images/blank.png")
    card.setAttribute("data-id", i)
    card.addEventListener("click", flipCard)
    grid.appendChild(card)
    }
}

function flipCard() {
    let cardId = this.getAttribute("data-id")
    cardsChosen.push(cards[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute("src", cards[cardId].img)
    if (cardsChosen.length == 2) {
        setTimeout(checkForMatch, 500)
    }
}
function checkForMatch(){
    if (cardsChosenIds[0] == cardsChosenIds[1])
    {
           alert("you have chick the same image yo")
                            }

}
createboard()
})


