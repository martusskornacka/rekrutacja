


btn;
const score = document.querySelector('.score');


btnReset;
count = 0;
addLife = 3

for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function (e) {

        if (e.target.classList.contains("green")) {
            count++;

            life.textContent = `Życia: ${addLife}`
            score.textContent = `Punkty: ${count}`
        } else {
            count--;
            addLife--;
            score.textContent = `Punkty: ${count}`;
            life.textContent = `Życia: ${addLife}`;
        }
        if (addLife == 0 || addLife < 0) {
            c = 60;
            clearInterval(myTimer);
            alert('Koniec gry - Straciłeś ostatnie zycie!');
            addLife = '';
            btnTime.textContent = "Start";
            life.innerHTML = `Zycia: `;
            panel.textContent = `Czas: ${c} sek`;
            score.innerHTML = "Punkty: 0";

        }


    })

};







