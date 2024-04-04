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
function continueGame(){
//   step 1 random alphabet genarate

const alphabet = getRandomAlphabet();

console.log ( ' your random alphabet', alphabet);

// set random alphabet generated alphabet to the screen show it 

const currentAlphabetElement = document.getElementById ('current-alphabet') ;
currentAlphabetElement.innerText =alphabet;

// set backgroundColor
 setBackgroundColorById(alphabet);

}

function play (){
    hideElementById('home-screen')

    showElementById('play-ground');

    continueGame ();
}