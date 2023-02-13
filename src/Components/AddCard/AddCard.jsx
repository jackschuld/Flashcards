import React, { useState } from 'react';

const AddCard = ({ activeCollection, addNewCard }) => {

    const [word, setWord] = useState('');
    const [definition, setDefinition] = useState('');

    function handleNewCard(event) {
        event.preventDefault();
        let newCard = {
            word: word,
            definition: definition,
        };

        addNewCard(newCard);
    }

    if (activeCollection.id){
        return ( 
            <form>
                <div>
                    <input type='text' value={word} onChange={(event) => setWord(event.target.value)}/>
                    <input type='text' value={definition} onChange={(event) => setDefinition(event.target.value)}/>
                </div>
                <button onClick={handleNewCard} type="button">Add Card to Collection</button>
            </form>
         );
    }
}
 
export default AddCard;