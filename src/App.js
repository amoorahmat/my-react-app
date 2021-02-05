import React from "react";

const App = () => {
  const title = "Hell React world! this text is dynamic";

  return (
    <div>
      <h1>{title}</h1>
      <h2 onClick={()=> alert('you click the message')}>This is my first React component</h2>
    </div>
  );
};

export default App;
