window.onscroll = function(){efect_function()}
var efect_professional_card = document.getElementById("professionals-cards")
var distance
function efect_function(){
    console.log("Estoy en la funcion    ")
    distance= window.innerHeight - efect_professional_card.getBoundingClientRect().top
    console.log(distance)
    if(distance >= 100){
        console.log("Estoy en el if")
        efect_professional_card.classList.add("professionals-cards-container__efect")
    }
}

document.querySelector('.menu-btn').addEventListener('click',()=>{
    document.querySelector('.nav-section').classList.toggle('show');
})