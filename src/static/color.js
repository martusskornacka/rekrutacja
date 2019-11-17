


btnTime
let btn = [...document.getElementsByClassName('square')];
count = 0;
btnReset;
active = true;
let c;


btnTime.addEventListener('click', function () {

  let c = 60;

  const change = setInterval(function () {
    for (i = 0; i < btn.length; i++) {

      btn[Math.floor(Math.random() * [btn.length])].classList.toggle('green');


    }

    if (c == 0) {

      clearInterval(myTimer);

    }



  }, 3000);

});


