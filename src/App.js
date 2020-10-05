import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list";
import SearchBox from "./components/search-box";

function App() {
  const [contacts, setContacts] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setContacts(users));
  }, []);

  const filter = (searchValue) => {
    setIsChanged(true);
    setFilteredContacts(
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchValue)
      )
    );
  };

  return (
    <div className="App">
      <h1>ROBO CONTACT</h1>
      <SearchBox onChange={filter} placeholder="search contact"/>
      <CardList contacts={isChanged ? filteredContacts : contacts} />
    </div>
  );
}

export default App;
