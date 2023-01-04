const pays = document.getElementById("pays");
const result = document.getElementById("result");
const result2 = document.getElementById("result2");
// function rechercher(){
//     console.log('your word', pays.value) // system.out.printLn
//     if(pays.value == "tn"){
//          = "30"
//     }
//     else if(pays.value == "fr"){
//         result.textContent = "20"
//     } else {
//         result.textContent = "Error Utilisateur"
//     }
// }
function rechercher() {
    console.log('your word', pays.value) // system.out.printLn
    result.textContent = api(pays.value) + "degrée"
}

function api(ville) {
    return Math.floor(Math.random() * 30)
}
function a(){
    result2.textContent = "A" 
}
function b(){
    result2.textContent = "B" 
}
function c(){
    result2.textContent = "C" 
}