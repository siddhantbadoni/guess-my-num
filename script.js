'use strict';
let modeButton = 1;
let hiddenNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let check = 0;
const displayMsg = function(message){
    document.querySelector('.message').textContent = message;
}
    document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    
    //console.log( guess , typeof guess);
    if (!guess) {
       // document.querySelector('.message').textContent = 'Enter A Number';
       displayMsg('Enter a Number');
    }

    else if (guess > 20 || guess < 0) {
        //document.querySelector('.message').textContent = 'Enter A Valid Number';
        displayMsg('Enter A Valid Number');
    }

    else if (check === guess) {
       score = score;
    }
    
    // when gussed number matched

    else if (guess === hiddenNumber) {
        document.querySelector('.number').textContent = hiddenNumber;
        // console.log(hiddenNumber);
       // document.querySelector('.message').textContent = 'You Win.....';
       displayMsg('You Win.....');
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
            document.querySelector('.check ').disabled = true;
        }
    }
    // when guess too high and low
    else if ( guess != hiddenNumber){
        if (score > 1) {
            guess > hiddenNumber ? displayMsg('Too High.....') :  displayMsg('Too Low.....');
            // document.querySelector('.message').textContent = 'Too High.....' =  displayMsg('Too High.....') ;
             score--;
             document.querySelector('.score').textContent = score;
        
       
         }
    }
      check = guess ;
}
    );


        // for restart the game

        document.querySelector('.again').addEventListener('click',function () {
            score = 20;
        hiddenNumber = Math.trunc(Math.random() * 20) + 1;
        console.log(hiddenNumber);
        document.querySelector('.number').textContent = '?'
        document.querySelector('.score').textContent = 20;
        
        document.querySelector('.guess').value = '';
        //document.querySelector('.message').textContent = 'Start Guessing.....';
        displayMsg('Start Guessing.....');
        document.querySelector('.check ').disabled = false;
        check=0;

       }
       );                                                                                                        
       
       // toogle button
       
       function myFunction() {
        let element = document.body;
         element.classList.toggle("dark-mode");
        // const modeButton = document.querySelector('.mode_button');
        // modeButton.textContent === 'Dark Mode' ? (modeButton.textContent = 'Light Mode') : (modeButton.textContent = 'Dark Mode');
        const modBtn = document.querySelector('.mode_button');
        console.log(modBtn);

        let modeButton = 1;

        if (modeButton === 1) {
            modBtn.textContent ='Light Mode';
            
            console.log(modeButton);
            console.log(modBtn.textContent);
            modeButton++;
        }else if(modeButton === 2){
            modBtn.textContent ='Dark Mode';
            
            console.log(modeButton);
            console.log(modBtn.textContent);
            modeButton--;
        }
          
        console.log(modeButton);
        
        }


        //Dark and Light Mode 
        const modBtn = document.querySelector('.mode_button');

        const darklight = (msg,n)=>{
            modBtn.textContent =msg;
            modeButton = n;
        };

        //Dark Light Mode
        const modButton = document.querySelector('.mode_button');
        
        if(modButton){
            modButton.addEventListener('click', ()=>{
            document.body.classList.toggle("dark-mode");

            if (modeButton === 1) {
                darklight('Light Mode',0);
            }else if(modeButton === 0){
                darklight('Dark Mode',1);
            }
        });
    }
       


