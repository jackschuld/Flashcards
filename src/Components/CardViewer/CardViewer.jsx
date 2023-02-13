import React, { useState } from 'react';
import Card from '../Card/Card';

const CardViewer = ({ cards, deleteCard, setCardNum, cardNum }) => {

    const [index, setIndex] = useState(0);
    let currentCard = cards[index];
    let cardsLength = cards.length;

    function drawCard() {
        // Need Collection!
        if (cardsLength === 0) {
            return alert('You must select a card Collection before starting!');
        }

        setIndex(index + 1);
        setCardNum(cardNum + 1);
    
        if (index + 1 === cardsLength){
            setCardNum(1);
            setIndex(0);
        }
    };

    function prevCard() {
        // Base case - Making sure a card collection is selected
        if (cardsLength === 0) {
            return alert('You must select a card Collection before starting!');
        }

        if (cardNum > 1) {
            setIndex(index - 1);
            setCardNum(cardNum - 1);
        }
        else {
            setIndex(cardsLength - 1);
            setCardNum(cardsLength);
        }
    };

    function handleDelete() {
        if (window.confirm('Are you sure you want to delete this card?')) {
            deleteCard(currentCard.id);
        }
    };

    return (
        <div>
            <button onClick={drawCard}>Draw Card</button>
            <button onClick={prevCard}>Prev Card</button>
            <Card card={currentCard} />
            <button onClick={handleDelete}>Delete Card</button>
        </div>
     );
}
 
export default CardViewer;