import './App.css';
import React, { useState } from 'react';

export default function App({ character }) {
  const [topTextBox, setTopTextBox] = useState('');
  const [bottomTextBox, setBottomTextBox] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('');
  return (
    <main>
      {character && (
        <section>
          <img src={character.image} alt={character.name} />
          <span>{character.status}</span>

          <span>{character.name}</span>
          <span>{character.species}</span>
          <span>{character.episode.length}</span>
          <br />
          <div>
            <div>
              <span>Origin</span>
              <span>{character.origin.name}</span>
            </div>
            <div>
              <span>Lives</span>
              <span>{character.location.name}</span>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

/*
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
                  onChange={(event) =>
                    setMemeTemplate(event.currentTarget.value)
                  }
                  id="memeTemplate"
                />
              </div>
              <br />
              <img src={character.image} alt={character.name} />
              <span>{character.status}</span>

              <span>{character.name}</span>
              <span>{character.species}</span>
              <span>{character.episode.length}</span>
              <br />
              <button onClick={() => {}}>Create meme</button>
              <br />
              <button onClick={() => {}}>Download</button>
              <br />
            </div>
          </form>
        </section>
      )}
    </main>
  );
}
*/
