function hideElementById (elementId){
    const element =document.getElementById(elementId)
    element.classList.add('hidden')
}
function showElementById (elementId){
    const element = document.getElementById(elementId);
element.classList.remove('hidden');
}
 function addBackGroundColorById(elementId){
    const element =document.getElementById(elementId)
    element.classList.add('bg-orange-400');

 }
 function removeBackgroundColorById(elementId){
    const element =document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
 }

 function getTextElementValueById(elementId){
     const element =document.getElementById(elementId)
     const elementValueText = element.innerText;
     const value = parseInt(elementValueText)
     return value;
 }

 function setTextElementValueById (elementId , value){
 const element = document.getElementById (elementId);
 element.innerText = value;
 }

//  function getTextElementValueById (elementId){
//     const element =document.getElementById(elementId);
//     const text =element.innerText;
//     return text;
//  }
 
function getRandomAlphabet (){
    // get or create an alphabet Array

    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  const alphabets =alphabetString.split('');
     console.log(alphabets);

    //  get a random  index between 0-25
    //  get a random 


    const randomNumber = Math.random() * 25;
    const index =Math.round(randomNumber)
  
    const alphabet = alphabets[index];
    console.log(index,);
    return alphabet;
}

// function getARandomAlphabet(){
//      const alphabetString = 'abcdefghijklmnopqrstuvwxyz' ;
//      const alphabets =alphabetString.split(' ');

//      const randomNumber = Math.random()*25;
//      const index = Math.round(randomNumber);

//      const alphabet = alphabets[index];
//       return alphabet;
// }