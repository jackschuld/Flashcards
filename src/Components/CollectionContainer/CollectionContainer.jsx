import React from 'react';
import Collection from '../Collection/Collection';

const CollectionContainer = ({ collections, setActiveCollection, setCards, setCardNum }) => {
    return ( 
        <div className='row'>
            <nav>
                {collections.map((collection) => {
                    return(
                        <div className='col-md-4'>
                            <Collection collection={collection} setActiveCollection={setActiveCollection} setCards={setCards} setCardNum={setCardNum}/>
                        </div>
                    );
                })}
            </nav>
        </div>
     );
}
 
export default CollectionContainer;