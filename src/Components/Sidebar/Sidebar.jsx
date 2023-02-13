import React from 'react';
import CollectionContainer from '../CollectionContainer/CollectionContainer';

const Sidebar = ({ collections, setActiveCollection, setCards, setCardNum }) => {


    return ( 
        <nav>
            <CollectionContainer collections={collections} setActiveCollection={setActiveCollection} setCards={setCards} setCardNum={setCardNum}/>
        </nav>
     );
}
 
export default Sidebar;