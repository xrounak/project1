import React from "react";
import Header from "./Header";
import ContactList from "./contactList";
import AddContacts from "./addContact";


function App() {
  const contacts = [
    {
      id:1,
      name:"unknown",
      email:"unknown@ugmail.com"
    },
    {
      id:2,
      name:"random",
      email:"random@ugmail.com"
    },
    {
      id:3,
      name:"deafult",
      email:"default@ugmail.com"}
  ];

  return (
    <div className="App">
      <Header/>
      <AddContacts contacts={contacts}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
