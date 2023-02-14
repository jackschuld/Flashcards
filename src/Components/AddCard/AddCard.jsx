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


    // Form that shows up after a collection is selected
    if (activeCollection.id){
        return ( 
            <form class="form-horizontal">
                <div className='form-group'>
                    <label for="inputWord" class="col-sm-2 control-label">Enter Word:</label>
                    <input type='text' id="inputWord" placeholder="Word" value={word} onChange={(event) => setWord(event.target.value)}/>
                </div>
                <div className='form-group'>
                    <label for="inputDefinition" class="col-sm-2 control-label">Enter Definition:</label>
                    <input type='text' id="inputDefinition" placeholder="Definition" value={definition} onChange={(event) => setDefinition(event.target.value)}/>
                </div>
                <div className='form-group'>
                    <label for="submitNewCard" class="col-sm-2 control-label"/>
                    <button onClick={handleNewCard} id="submitNewCard" class="btn btn-default" type="submit">Add Card</button>
                </div>
            </form>
         );
    }
}
 
export default AddCard;
