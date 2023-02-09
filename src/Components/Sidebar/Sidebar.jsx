import React from 'react';
import CollectionContainer from '../CollectionContainer/CollectionContainer';

const Sidebar = ({ collections, setActiveCollection, setCards }) => {


    return ( 
        <nav>
            <CollectionContainer collections={collections} setActiveCollection={setActiveCollection} setCards={setCards}/>
        </nav>
     );
}
 
export default Sidebar;