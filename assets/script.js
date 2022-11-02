 const pCards = document.querySelector('.positionCards');
 
 const allCards = [
    'dog marley',
    'dog police',
    'dog sheep',
    'dog singer',
    'dog snowmen',
    'dog yoda',
 ];
 

 
 
 


 
 const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
 }

    const checkWinCondition = () => {
        const disableCards = document.querySelectorAll('.disabled-card');

        if(disableCards.length === 12){
            setTimeout(() => {
               
                alert('Parabéns, você ganhou!!!!');  
            
             }, 600);   
         
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

      }else{
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');
       
            firstCard = ''
            secondCard = ''
        
         }, 800);
     
    
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
  const duplicateCharacters =[...allCards, ...allCards]  
    
   const shuffleArray = duplicateCharacters.sort(() => Math.random() - 0.5);
   shuffleArray.forEach((character) =>{
     
       const card = createCard(character);
       pCards.appendChild(card);
    
    });
 }
loadGame();
