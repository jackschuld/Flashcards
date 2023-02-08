import React from 'react';
import CollectionContainer from '../CollectionContainer/CollectionContainer';

const Sidebar = ({ collections, getCollectionCards }) => {
    return ( 
        <nav>
            <ul>
                <li><button>Add Card</button></li>
                <li><button>Edit Card</button></li>
                <li><button>Delete Card</button></li>
            </ul>
            <div>
                <CollectionContainer collections={collections} getCollectionCards={getCollectionCards}/>
            </div>
        </nav>
     );
}
 
export default Sidebar;