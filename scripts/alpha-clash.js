// function play (){
// //    step 1 hide the home screen to hide the screen add the class hidden to the home section
// const homeSection =document.getElementById('home-screen')
// homeSection.classList.add('hidden');
// // console.log(homeSection.classList)

// // show the palyGround 
//  const playGroundSection =document.getElementById('play-ground ')
//  playGroundSection.classList.remove('hidden')
// //  console.log(playGroundSection.classList)

// }
function handleKeyboardButtonPress (event){
    const playerPress= event.key;
//  console.log('player pressed', playerPress)
//  stop the game if pressed to press esc

if(playerPress ==='Escape' ){
    gameOver()
}


//  get expected to press

const currentAlphabetElement =document.getElementById('current-alphabet');
const currentAlphabet =currentAlphabetElement.innerText;
const expectedAlphabet =currentAlphabet.toLocaleLowerCase ()
console.log(playerPress, expectedAlphabet);

// check matched or not 

if(playerPress === expectedAlphabet){

    console.log('you get a point')
 const currentScore = getTextElementValueById('current-score');
 console.log(currentScore)

 const updatedScore =currentScore +1;

 setTextElementValueById ('current-score' , updatedScore)

    // update  score :
    // 1  get the current score 
    // const currentScoreElement  =document.getElementById('current-score')
    // const currentScoreText =currentScoreElement.innerText;
    // const currentScore =parseInt(currentScoreText)
    // console.log(currentScore)
//  const currentScore =getTextElementValueById ('current-score');

    // // 2 increase the score by 1 
    // const newScore = currentScore +1;
    // // 3show the updated score 
    // currentScoreElement.innerText =newScore;

//  start a new round 

    // console.log('you have correctly ',expectedAlphabet)
    removeBackgroundColorById (expectedAlphabet)
    continueGame ();
}else{
    console.log('you missed , you lost a life');


const currentLife = getTextElementValueById('current-life')
const updatedLife =currentLife -1;
setTextElementValueById ('current-life',updatedLife)

if(updatedLife === 0){
    gameOver ();
}





// --------------------------------------
    // step 1 get the current  life number ;
    // const currentLifeElement = document.getElementById('current-life')
    // const currentLifeText =currentLifeElement.innerText;
    // const currentLIfe =parseInt(currentLifeText);
    
    // // step 2 ;reduce the life count
    // const newLife =currentLIfe -1 ;


    // //  step 3  display the update life count
    // currentLifeElement.innerText=newLife;
}


}
// capture keyboard ky press
document.addEventListener('keyup',handleKeyboardButtonPress  )



function continueGame(){
//   step 1 random alphabet genarate

const alphabet = getRandomAlphabet();

// console.log ( ' your random alphabet', alphabet);

// set random alphabet generated alphabet to the screen show it 

const currentAlphabetElement = document.getElementById ('current-alphabet') ;
currentAlphabetElement.innerText =alphabet;

// set backgroundColor
 setBackgroundColorById(alphabet);


}

function play (){
    // hide everything show the playground 
    hideElementById('home-screen')
    hideElementById('final-score')
    showElementById('play-ground');

//  reset score and life 
setTextElementValueById('current-life',5);
setTextElementValueById('current-score',0)

    continueGame ();
}

function gameOver(){
  hideElementById('play-ground')
  showElementById('final-score')
//   update final score 
// 1 . get the final score 
const lastScore = getTextElementValueById('current-score');
console.log(lastScore);
setTextElementValueById('last-score',lastScore);

// clear the last selected alphabet highlight
// const currentAlphabet =getElementTextById('current-alphabet');
// console.log(currentAlphabet)
// removeBackgroundColorById(currentAlphabet)
}
