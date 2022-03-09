(() => {
    /**
     *  1. Clear Idea about the project(granual details)
     *  2. Visualize the flow
     * 
     * Thought Process => Bojte hobe or dorte hobe ki vabe think korse all follow korte hobe...
     * Focus is main key(Important)
     */
    /**
     * * যখন আমরা ইজারের থেকে কোন ইনপুট নিব সবসময় সেই ইনপুট স্ট্রিং হিসাবে রিসিভ হবে । 
     */

    const formElm = document.querySelector('form');
    const userInputElm = document.querySelector('#luck-input');
    const luckyNumberElm = document.querySelector('.lucky-number span');
    const p1BtnElm = document.querySelector('.p1Btn');
    const p2BtnElm = document.querySelector('.p2Btn');
    const p1InputElm = document.querySelector('.p1');
    const p2InputElm = document.querySelector('.p2');
    const winnerElm = document.querySelector('.winner');
    const resetBtnElm = document.querySelector('.resetBtn');


    let luckNumber;
    let p1Value;
    let p2Value;
    let p1Turn;
    let p2Turn;
    let gameOver;

    function randNum(num) {
        // 0-9
        return Math.floor(Math.random() * (num + 1));
    }

    function initialState() {
        luckNumber = 7;
        p1Value = 0;
        p2Value = 0;
        p1Turn = true;
        p2Turn = true;
        gameOver = false;
    }

    function initialView() {
        //show intro DOM
        luckyNumberElm.textContent = luckNumber;
        p1InputElm.textContent = 0;
        p2InputElm.textContent = 0;
        p1BtnElm.removeAttribute('disabled');
        p2BtnElm.removeAttribute('disabled');
        winnerElm.textContent = '';
    }

    initialState();
    initialView();

    function winnerState(player) {
        gameOver = true;
        //p1 is winer
        winnerElm.textContent = `${player} is winner`;
        //disable All player
        p1BtnElm.setAttribute('disabled', false);
        p2BtnElm.setAttribute('disabled', false);
    }

    formElm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        // Reveviing the input
        luckNumber = parseInt(userInputElm.value);
        if (luckNumber) {
            // Insert into lickyNumber Element
            luckyNumberElm.textContent = luckNumber;
        }
        //Reset the unput
        userInputElm.value = '';

    });

    p1BtnElm.addEventListener('click', (evt) => {
        if (p1Turn && luckNumber !== p1Value && luckNumber !== p2Value) {
            //Invrement tht p1 value
            // p1Value++;
            p1Value = randNum(luckNumber);
            //Inserting into DOM
            p1InputElm.textContent = p1Value;
            //Switc of p1Turn and start  p1Turn
            p1Turn = false;
            p2Turn = true;
            //show Visible markup
            p1BtnElm.setAttribute('disabled', false);
            p2BtnElm.removeAttribute('disabled');
        }
        if (p1Value === luckNumber) {
            winnerState('P1');
        }
    });

    p2BtnElm.addEventListener('click', (evt) => {

        if (p2Turn && luckNumber !== p1Value && luckNumber !== p2Value) {

            //Invrement tht p1 value
            // p2Value++;
            p2Value = randNum(luckNumber);
            console.log(p2Value);
            //Inserting into DOM
            p2InputElm.textContent = p2Value;
            //Switc of p1Turn and start  p1Turn
            p2Turn = false;
            p1Turn = true;
            //show Visible markup
            p2BtnElm.setAttribute('disabled', false);
            p1BtnElm.removeAttribute('disabled');
        }
        if (p2Value === luckNumber) {
            winnerState('P2');
        }
    });

    resetBtnElm.addEventListener('click', (evt) => {
        initialState();
        initialView();
    });
    // console.log(userInputElm);
})();