import React, { useState } from 'react';
import Card from '../Card/Card';

const CardViewer = ({ cards }) => {

    const [index, setIndex] = useState(0);
    const [currentCard, setCurrentCard] = useState({});
    let word = currentCard.word;
    let definition = currentCard.definition;
    

    function drawCard() {
        if (cards.length === 0) {
            return alert('You must select a card Collection before starting!');
        }
        if (index + 1 >= cards.length){
            setIndex(0);
        }
        else{
            setIndex((index + 1));
        }
        console.log(index)
        console.log(cards.length)
        setCurrentCard(cards[index]);
    }

    function prevCard() {
        // Base case - Making sure a card collection is selected
        if (cards.length === 0) {
            return alert('You must select a card Collection before starting!');
        }
        if (index > 0){
            setIndex(index - 1);
        }
        else {
            setIndex(2);
        }
        setCurrentCard(cards[index]);
    }


    return (
        <div>
            <button onClick={drawCard}>Draw Card</button>
            <button onClick={prevCard}>Prev Card</button>
            <Card word={word} definition={definition}/>
        </div>
     );
}
 
export default CardViewer;