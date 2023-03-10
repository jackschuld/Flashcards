import React from 'react';
import CardViewer from '../CardViewer/CardViewer';

const CardContainer = ({ cards, deleteCard, cardNum, setCardNum }) => {

    if (cardNum !== 0){
        return (
            <div>
                <div className='col-md-12'>
                    <p>{cardNum} / {cards.length}</p>
                </div>
                <CardViewer cards={cards} deleteCard={deleteCard} cardNum={cardNum} setCardNum={setCardNum}/>
            </div>
        );
    }
}
 
export default CardContainer;