let posLeft = getRandomInt(350);
let posTop = getRandomInt(590);
let carre = document.getElementById("objet")
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
carre.style.left = posLeft + "px";
carre.style.top = posTop + "px";

const fin = document.getElementById("fin")


let stepHorizontal = Math.random() < 0.5 ? -1 : 1;
let stepVertical = Math.random() < 0.5 ? -1 : 1;

function move(){

    posLeft += stepHorizontal;
    posTop += stepVertical;

    // horizontal
    if (posLeft <= 0) {
        posLeft = 0;
        stepHorizontal *= -1;
    }

    if (posLeft >= 350) {
        posLeft = 350;
        stepHorizontal *= -1;
    }

    // vertical
    if (posTop <= 0) {
        posTop = 0;
        stepVertical *= -1;
    }

    if (posTop >= 590) {
        posTop = 590;
        stepVertical *= -1;
    }
    
    carre.style.left = posLeft + "px";
    carre.style.top = posTop + "px";

    if ((posLeft == 0 || posLeft == 350) &&(posTop == 0 || posTop == 590))
    {
        clearInterval(intervalId);
        fin.innerHTML = "Fin du jeu!"
    }
}



let intervalId = setInterval(move,10)