import React, { useState } from 'react';

const AddCard = ({ collection: activeCollection, addNewCard }) => {

    const [word, setWord] = useState('');
    const [definition, setDefinition] = useState('');

    function handleNewCard(event) {
        event.preventDefault();
        let newCard = {
            word: word,
            definition: definition,
            collection_id: activeCollection.id
        };

        addNewCard(newCard);
    }

    return ( 
        <form onSubmit={handleNewCard}>
            <div>
                <input type='text' value={word} onChange={(event) => setWord(event.target.value)}/>
                <input type='text' value={definition} onChange={(event) => setDefinition(event.target.value)}/>
            </div>
            <button type='submit'>Add Card to Collection</button>
        </form>
     );
}
 
export default AddCard;