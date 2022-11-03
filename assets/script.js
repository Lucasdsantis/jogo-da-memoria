
const pCards = document.querySelector('.positionCards');
 
 
 const allCards = [
    'dog marley',
    'dog police',
    'dog sheep',
    'dog singer',
    'dog snowmen',
    'dog yoda',
 ];
 


// const wrongSound = () => {
   // }
   
 let  wSound = new Audio('./sounds/565133__unfa__ui-cancel.flac')
 let rSound = new Audio('./sounds/rightSound.wav')
 let winSound = new Audio('./sounds/625495__abhisheky948__animal-dog-bark-26.wav')
 
 
 const halfVolume = () => {
   const music = document.getElementById('music')
   music.volume= 0.3;
 }


 
 const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
 }

    const checkWinCondition = () => {
        const disableCards = document.querySelectorAll('.disabled-card');

        if(disableCards.length === 12){
            setTimeout(() => {
               
               //  alert('Parabéns, você ganhou!!!!'); 
               // 
               Swal.fire({
                  title: 'PARABÉNS',
                  text: 'Voce é fera!!',
                  imageUrl:'https://media.giphy.com/media/PkPpnkyeC2wYmCqHu5/giphy.gif',
                  imageWidth: 400,
                  imageHeight: 400,
                  imageAlt: 'Custom image',
                })



             }, 600);   
         setTimeout(() => {
          winSound.play()
         },500)
             
        }
    } 

   const checkCards = () => {
     const firstChar = firstCard.getAttribute('data-character')
     const secondChar = secondCard.getAttribute('data-character')
   
      
      if(firstChar === secondChar) {
       
        firstCard.firstChild.classList.add('disabled-card');
       secondCard.firstChild.classList.add('disabled-card');
       
       firstCard = '';
       secondCard = '';
     
       checkWinCondition()
       rSound.play()
       
      }else{
       
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');
       
            firstCard = ''
            secondCard = ''
        
         }, 800);
     
       wSound.play()
    }  
    }



 let firstCard = '';
 let secondCard = '';


  const revealCard = ({target}) => {
     if(target.parentNode.className.includes('reveal-card')){
        return;
     }

     if(firstCard === ''){
        target.parentNode.classList.add('reveal-card')
        firstCard = target.parentNode;
     }else if(secondCard === ''){
        target.parentNode.classList.add('reveal-card')
        secondCard = target.parentNode;

      checkCards()
     
 
      
     }



    
  }
 
 
 const createCard = (character) =>{

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.png')`;
   
    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character)

    return card;

}

 const loadGame = () => {
   halfVolume ()
   const duplicateCharacters =[...allCards, ...allCards]  
    
   const shuffleArray = duplicateCharacters.sort(() => Math.random() - 0.5);
   shuffleArray.forEach((character) =>{
     
       const card = createCard(character);
       pCards.appendChild(card);
    
    });
 }
loadGame();
