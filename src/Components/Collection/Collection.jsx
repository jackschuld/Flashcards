import React from 'react';

const Collection = ({ collection, getCollectionCards }) => {

    function handleSubmit() {
        getCollectionCards(collection.id)
    }

    return ( 
        <button onClick={handleSubmit}>{collection.title}</button>
     );
}
 
export default Collection;