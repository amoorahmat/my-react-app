import React, { useState, useEffect } from "react";
import "./App.css";
import ContactCard from "./ContactCard";

const App = () => {
  // const contacts = [
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Jenny Hen",
  //     email: "A@gmail.com",
  //     age: 30,
  //   },
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Asghar Sag",
  //     email: "B@yahoo.com",
  //     age: 60,
  //   },
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Ahmad Gorg",
  //     email: "C@hotmail.com",
  //     age: 90,
  //   },
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Lisa Ghobadi",
  //     email: "d@hotmail.com",
  //     age: 40,
  //   }
  // ];

  const [results, setResults] = useState([]);
  
  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=10")
    .then(response => response.json())
    .then(data => 
      {
        console.log(data)
        setResults(data.results)
      }
      );
  },[])
  

  return (
    <div>
      {results.map((result, index) => {
        return (
          // <ContactCard key={index}
          //   avatarUrl={contact.avatarUrl}
          //   name={contact.name}
          //   email={contact.email}
          //   age={contact.age}
          // />
          <ContactCard key={index}
            avatarUrl={result.picture.large}
            name={result.name.first}
            email={result.email}
            age={result.dob.age}
          />
        );
      })}
    </div>
  );
};

export default App;
