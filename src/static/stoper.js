
const btnTime = document.getElementById('start');
const btnReset = document.getElementById('clear');
const panel = document.querySelector('.time');
const life = document.querySelector('.life');


// let time = 60;
let active = false;
// let idI;

let myTimer;
function clock() {
    myTimer = setInterval(myClock, 1000);
    let c = 60;
    function myClock() {
        score;
        panel.innerHTML = `Czas: ${--c} sek`;
        life.textContent = `Zycia:`;
        btnTime.textContent = "Stop";

        if (btnTime === active) {
            clearInterval(myTimer);
            score.textContent = "Punkty:0";
        }

        if (c == 0) {

            alert("Czas się skończył");
            panel.textContent = `Czas: ${c} sek`;
            clearInterval(myTimer);

            btnTime.textContent = "Start";
            score.innerHTML = "Punkty:0";

        }



    }
};




// const start = () => {
//     time--;
//     panel.textContent = `Czas: ${time} sek`;

// }


const reset = () => {
    c = 60;
    addLife = 3;
    panel.textContent = `Czas: ${c} sek`;
    life.innerHTML = `Zycia: ${addLife} `;
    btnTime.textContent = 'Start';
    clearInterval(myTimer);
    score.innerHTML = "Punkty: 0";



}

btnTime.addEventListener('click', clock);
btnReset.addEventListener('click', reset);
