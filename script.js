//Kasper
/*let billedergalleri = [
    ["img/rød.png","img/gul.png","img/grøn.png"]
]

let select_element = document.getElementById("");
for(let i = 0; <galleri.lenght; i++) {

    let billedergalleri = galleri [i];
    select_element.innerHTML +="<div class'billederigalleri' > + '" billedegaleri[i][0]+ billedergalleri[i][1]++ billedergalleri[i][2]    
}
*/

//Signe
let countDownBowling = new Date("May 5, 2023 17:00:00").getTime();

let x = setInterval(function() {

    let nu = new Date().getTime();
    
    let dageIndtil = countDownBowling - nu;

    let dage = Math.floor(dageIndtil / (1000 * 60 * 60 * 24));

    let timer = Math.floor((dageIndtil % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));

    let minutter = Math.floor((dageIndtil % (1000 * 60 * 60 * 24)) / (1000 * 60));

    let sekunder = Math.floor((dageIndtil % (1000 * 60)) / 1000);

    document.getElementById("countdownid").innerHTML = dage + "d " + timer + "t " + minutter + "m " + sekunder + "s ";

    if (dageIndtil < 0 ) {
        clearInterval(x);
        document.getElementById("countdownid").innerHTML = "Eventet er igang";
    }
}, 1000);

//Aimi

//Claudia