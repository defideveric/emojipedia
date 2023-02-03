import React from "react";
import Entry from "../components/Entry";
import emojipedia from "../emojipedia"



function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map( emojiTerm =>  (
          <Entry key= {emojiTerm.id} 
          emoji={emojiTerm.emoji} 
          name={emojiTerm.name} 
          description={emojiTerm.description}/>
          ))}
      </dl>
    </div>
  );
}

export default App;
