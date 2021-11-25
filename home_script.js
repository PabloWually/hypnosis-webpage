window.onscroll = function(){efect_function()}
var efect_professional_card = document.getElementById("professionals-cards")
var distance
function efect_function(){
    distance= window.innerHeight - efect_professional_card.getBoundingClientRect().top
    console.log(distance)
    if(distance >= 100){
        efect_professional_card.classList.add("professionals-cards-container__efect")
    }
    else{
        efect_professional_card.classList.remove("professionals-cards-container__efect")
    }
}