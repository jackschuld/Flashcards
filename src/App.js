import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import CardContainer from "./Components/CardContainer/CardContainer";
import AddCard from './Components/AddCard/AddCard';
import './App.css'

function App() {

  const [collections, setCollections] = useState([])
  const [activeCollection, setActiveCollection] = useState([])
  const [cards, setCards] = useState([]);
  const [cardNum, setCardNum] = useState(0);


  useEffect(() => {
    getAllCollections();
  }, [])

// Get all cards from a collection
  async function getAllCollections() {
    let response = await axios.get("http://127.0.0.1:8000/api/collections/");
    setCollections(response.data);
  }


  // Add card
  async function addNewCard(newCard) {
    let url = "http://127.0.0.1:8000/api/collections/" + activeCollection.id + "/cards/";
    let response = await axios.post(url, newCard);
    if (response.status === 201) {
      await getAllCollections();
    }
  }

  // Delete card
  async function deleteCard(card) {
    let url = "http://127.0.0.1:8000/api/collections/" + activeCollection.id + "/cards/" + card + "/";
    let response = await axios.delete(url);
    if (response.status === 202) {
      await getAllCollections();
    }
  }


  return (
    <div>
      <Header/>
      <div className='row'>
          <div className='col-md-12'>
            <h4>Collections</h4>
          </div>
      </div>
      <Sidebar collections={collections} setActiveCollection={setActiveCollection} setCards={setCards} setCardNum={setCardNum}/>
      <div className='row'>
        <AddCard activeCollection={activeCollection} addNewCard={addNewCard}/>
      </div>
      <div className='row'>
        <CardContainer cards={cards} deleteCard={deleteCard} cardNum={cardNum} setCardNum={setCardNum}/>
      </div>
    </div>
  );
}

export default App;
