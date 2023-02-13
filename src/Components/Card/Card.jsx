import React, { useState } from 'react';

const Card = ({ card }) => {

    const [isFlipped, setIsFlipped] = useState(false)

    function handleFlip() {
        console.log("handleFlip - currentCard: ")
        setIsFlipped(!isFlipped)
    }

    // When this div is clicked, setFlip will set the flip boolean to the opposite of it's current state (T or F).
    // Next, it will select the front or back of the card based off the flip state.
    if (card){
        const { word, definition } = card;
        return (
        <div className="container-fluid" onClick={handleFlip}>
            { isFlipped ? definition : word}
        </div>
     );
    }
}
 
export default Card;