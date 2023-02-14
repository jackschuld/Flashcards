import axios from 'axios';
import React from 'react';

const Collection = ({ collection, setActiveCollection, setCards, setCardNum }) => {

    function handleSubmit() {
        setActiveCollection(collection);
        getCollectionCards();
    }

    async function getCollectionCards() {
        let url = "http://127.0.0.1:8000/api/collections/" + collection.id + "/cards/";
        let response = await axios.get(url);
        setCards(response.data);
        setCardNum(1);
    }

    return ( 
        <a href="#collections" class="btn btn-primary btn-lg active" role="button" onClick={handleSubmit}>{collection.title}</a>
     );
}
 
export default Collection;
