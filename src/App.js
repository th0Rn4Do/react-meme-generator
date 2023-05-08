import './App.css';
import React, { useState } from 'react';

export default function App() {
  const [topTextBox, setTopTextBox] = useState('');
  const [bottomTextBox, setBottomTextBox] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('');
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="App">
        <div>
          <label htmlFor="topTextBox">Top text: </label>
          <input
            value={topTextBox}
            onChange={(event) => setTopTextBox(event.currentTarget.value)}
            id="topTextBox"
          />
          <br />
          <label htmlFor="bottomTextBox">Bottom text: </label>
          <input
            value={bottomTextBox}
            onChange={(event) => setBottomTextBox(event.currentTarget.value)}
            id="bottomTextBox"
          />
          <br />
          <label htmlFor="memeTemplate">Meme template </label>
          <input
            value={memeTemplate}
            onChange={(event) => setMemeTemplate(event.currentTarget.value)}
            id="memeTemplate"
          />
        </div>
        <br />
        <button onClick={() => {}}>Create meme</button>
        <br />
        <button onClick={() => {}}>Download</button>
        <br />
      </div>
    </form>
  );
}
