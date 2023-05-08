import './App.css';
import { useState } from 'react';

export default function App() {
  const [topTextBox, setTopTextBox] = useState('');
  const [bottomTextBox, setBottomTextBox] = useState('');
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
        </div>
        <button onClick={() => {}}>Submit</button>
      </div>
    </form>
  );
}
