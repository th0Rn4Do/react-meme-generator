import './App.css';
import { useState } from 'react';

export default function App() {
  const [topTextBox, setTopTextBox] = useState('');
  const [bottomTextBox, setBottomTextBox] = useState('');
  return (
    <div className="App">
      <div>
        <input
          value={topTextBox}
          onChange={(event) => setTopTextBox(event.currentTarget.value)}
        />
        <br />
        <input
          value={bottomTextBox}
          onChange={(event) => setBottomTextBox(event.currentTarget.value)}
        />
      </div>
    </div>
  );
}
