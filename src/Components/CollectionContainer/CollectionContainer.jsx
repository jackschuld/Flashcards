import React from 'react';
import Collection from '../Collection/Collection';

const CollectionContainer = ({ collections, setActiveCollection, setCards }) => {
    return ( 
        <div>
            <h4>Collections</h4>
            <nav>
                {collections.map((collection) => {
                    return(
                    <Collection collection={collection} setActiveCollection={setActiveCollection} setCards={setCards}/>
                    );
                })}
            </nav>
        </div>
     );
}
 
export default CollectionContainer;