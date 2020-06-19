let count = 0;
let userPoint = 0;
let compPoint = 0;
let userInput;


let player = document.getElementById('player-section');
let computer = document.getElementById('computer-section');
let rockBtn = document.getElementById('rock-btn');
let paperBtn = document.getElementById('paper-btn');
let scissorsBtn = document.getElementById('scissors-btn');
let ngameBtn = document.getElementById('ngame-btn');
let btnsSecs = document.getElementById('game-btns');

let result = document.createElement('h1');
let userCount = document.createElement('h1');
let compCount = document.createElement('h1');
let userImg = document.createElement('img');
let compImg = document.createElement('img');

userImg.setAttribute('id', 'user-img');
compImg.setAttribute('id', 'comp-img');
result.setAttribute('id', 'result');
userCount.setAttribute('class', 'user-count');
compCount.setAttribute('class', 'computer-count')


player.appendChild(userCount);
computer.appendChild(compCount);


userCount.innerHTML = 0;
compCount.innerHTML = 0;

//Rock Button 
rockBtn.addEventListener('click', () => {
  userInput = 'rock';
  userImg.src = './imgs/rock.jpg'
  player.appendChild(userImg);
  game(userInput);
  userCount.innerHTML = userPoint;
  compCount.innerHTML = compPoint;
});

//Paper Button 
paperBtn.addEventListener('click', () => {
  userInput = 'paper';
  userImg.src = './imgs/paper.jpg'
  player.appendChild(userImg);
  game(userInput);

  userCount.innerHTML = userPoint;
  compCount.innerHTML = compPoint;
});

//Scissors Button 
scissorsBtn.addEventListener('click', () => {
  userInput = 'scissors';
  userImg.src = './imgs/scissors.jpg'
  player.appendChild(userImg);

  game(userInput);
  userCount.innerHTML = userPoint;
  compCount.innerHTML = compPoint;
});

//New Game
ngameBtn.addEventListener('click', () => {
  location.reload();
});


//Game function
const game = (usr) => {
 
	let compInput = (Math.random() >= 0.1 && Math.random() <=0.3) ? 'rock' : 
                (Math.random() > 0.3 && Math.random() <=0.6) ? 'paper' :
                 'scissors';
                
    if(compInput === 'rock'){
      compImg.src = './imgs/rock.jpg'
    }
    else if(compInput === 'scissors'){
      compImg.src = './imgs/scissors.jpg'
    }
    else if(compInput === 'paper'){
      compImg.src = './imgs/paper.jpg'
    }

    if(usr === 'rock' && compInput === 'rock'){
        result.textContent = 'DRAW!'
        console.log(`comp plays ${compInput}: Draw`);
    }
    else if(usr === 'rock' && compInput === 'paper'){
        result.textContent = 'YOU LOOSE!'
        console.log(`comp plays ${compInput}: You Loose`);
        compPoint++; 
    }
    else if(usr === 'rock' && compInput === 'scissors'){
         result.textContent = 'YOU WIN!'
         console.log( `comp plays ${compInput}: You Win`); 
         userPoint++;
    }
    else if(usr === 'paper' && compInput === 'paper'){
        result.textContent = 'DRAW!'
        console.log(`comp plays ${compInput}: Draw`); 
    }
    else if(usr === 'paper' && compInput === 'scissors'){
         result.textContent = 'YOU LOOSE!'
         console.log(`comp plays ${compInput}: You Loose`); 
         compPoint++; 
    }
    else if(usr === 'paper' && compInput === 'rock'){
         result.textContent = 'YOU WIN!'
         console.log(`comp plays ${compInput}: You Win`);
         userPoint++;
    }
    else if(usr === 'scissors' && compInput === 'scissors'){
        result.textContent = 'DRAW!'
        console.log(`comp plays ${compInput}: Draw`); 
    }
    else if(usr === 'scissors' && compInput === 'rock'){
        result.textContent = 'YOU LOOSE!'
         console.log(`comp plays ${compInput}: You Loose`); 
         compPoint++; 
    }
    else if(usr === 'scissors' && compInput === 'paper'){
         result.textContent = 'YOU WIN!'
         console.log(`comp plays ${compInput}: You Win`); 
         userPoint++;
    }
    else{
        console.log('Enter valid option!');
    }

    btnsSecs.prepend(result);
    computer.appendChild(compImg);

}







