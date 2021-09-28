const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');

buttons.forEach(button =>
    button.addEventListener('click', e => {
        //clicked =
        if (e.target.classList.contains('btn-equal')) {
            screen.value = Function('"use strict";return (' + screen.value + ')')();
        }
        else
            //clicked CLEAR
            if (e.target.classList.contains('btn-clear')) {
                screen.value = '';
                return;
            }
            else {  //Clicked something other than = or CLEAR
                let clickedButton = e.target.dataset.num;
                screen.value = screen.value + clickedButton;
            }
    })
);