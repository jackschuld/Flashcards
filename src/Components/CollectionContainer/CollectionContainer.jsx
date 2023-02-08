import React from 'react';
import Collection from '../Collection/Collection';

const CollectionContainer = ({ collections, getCollectionCards }) => {
    return ( 
        <div>
            <h4>Collections</h4>
            <ul>
                {collections.map((collection) => {
                    return(
                    <li><Collection collection={collection} getCollectionCards={getCollectionCards}/></li>
                    );
                })}
            </ul>
        </div>
     );
}
 
export default CollectionContainer;