import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import CardContainer from "./Components/CardContainer/CardContainer";
import AddCard from './Components/AddCard/AddCard';


function App() {

  const [collections, setCollections] = useState([])
  const [activeCollection, setActiveCollection] = useState([])
  const [cards, setCards] = useState([]);


  useEffect(() => {
    getAllCollections();
  }, [])


  async function getAllCollections() {
    let response = await axios.get("http://127.0.0.1:8000/api/collections/");
    setCollections(response.data);
  }


  async function addNewCard(newCard) {
    let url = "http://127.0.0.1:8000/api/collections/" + activeCollection.id + "/cards/";
    let response = await axios.post(url, newCard);
    if (response.status === 201) {
      await getAllCollections();
    }
  }


  return (
    <div>
      <Header/>
      <Sidebar collections={collections} setActiveCollection={setActiveCollection} setCards={setCards}/>
      <AddCard activeCollection={activeCollection} addNewCard={addNewCard}/>
      <CardContainer cards={cards}/>
    </div>
  );
}

export default App;
