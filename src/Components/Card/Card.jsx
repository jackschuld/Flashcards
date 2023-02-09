import React, { useState } from 'react';

const Card = ({ word, definition }) => {

    const [isFlipped, setIsFlipped] = useState(false)

    function handleFlip() {
        console.log("handleFlip - currentCard: ")
        setIsFlipped(!isFlipped)
    }

    // When this div is clicked, setFlip will set the flip boolean to the opposite of it's current state (T or F).
    // Next, it will select the front or back of the card based off the flip state.
    return (
        <div onClick={handleFlip}>
            { isFlipped ? definition : word}
        </div>
     );
}
 
export default Card;