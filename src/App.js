import './App.css';
import './GetApiCall.js';
import './Image.js';
import React, { useEffect, useState } from 'react';
import GetApiCall from './GetApiCall.js';
import Image from './Image.js';

export default function App() {
  const [topTextBox, setTopTextBox] = useState('');
  const [bottomTextBox, setBottomTextBox] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('');
  return (
    <>
      <h1>header</h1>
      <main>
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
                onChange={(event) =>
                  setBottomTextBox(event.currentTarget.value)
                }
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
            <Image />
            <br />
            <button onClick={() => {}}>Create meme</button>
            <br />
            <button onClick={() => {}}>Download</button>
            <br />
          </div>
          {/* <GetApiCall /> */}
        </form>
      </main>
      <footer>my footer</footer>
    </>
  );
}
