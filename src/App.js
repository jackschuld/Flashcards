import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import CardContainer from "./Components/CardContainer/CardContainer";

function App() {

  const [collections, setCollections] = useState([])
  const [cards, setCards] = useState([])

  useEffect(() => {
    getAllCollections();
  }, [])

  async function getAllCollections() {
    let response = await axios.get("http://127.0.0.1:8000/api/collections/");
    setCollections(response.data);
  }

  async function getCollectionCards(collectionId) {
    let url = "http://127.0.0.1:8000/api/collections/" + collectionId + "/cards/";
    let response = await axios.get(url);
    setCards(response.data)
  }

  return (
    <div>
      <Header/>
      <Sidebar collections={collections} getCollectionCards={getCollectionCards}/>
      <CardContainer cards={cards}/>
    </div>
  );
}

export default App;
