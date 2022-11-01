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
  const revealCard = ({target}) => {
    target.parentNode.classList.add('reveal-card')
  }
 
 
 const createCard = (character) =>{

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.png')`;
   
    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);

    return card;

}

 const loadGame = () => {
  const duplicateCharacters =[...allCards, ...allCards]  
    
   const shuffleArray = duplicateCharacters.sort(() => Math.random() - 0.5);
  duplicateCharacters.forEach((character) =>{
     
       const card = createCard(character);
       pCards.appendChild(card);
    
    });
 }
loadGame();
