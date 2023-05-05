import React, { useState } from 'react';
import styles from './App.css';
import bitcoinMessage from 'bitcoinjs-message';

window.Buffer = window.Buffer || require("buffer").Buffer;

function App() {
  const [isVerified, setIsVerified] = useState('');

  const bitcoinMessageVerify = (e) => {
    e.preventDefault();
    try {
      let result = bitcoinMessage.verify(e.target[1].value, e.target[0].value, e.target[2].value);
      if (result) {
        setIsVerified(true);
      } else {
        setIsVerified(false);
      }
    } catch(e) {
      setIsVerified(e);
    }
  };
  
  // let x = bitcoinMessageVerify('test','1HvaxYmChk9nQUZx888a6hc7E8KnKP98ic','HCfgnEo8RNYTgcOXafAf11BQQ5LXSvlss0AbnezENbFJQzRl0dJRGOfYbOrOPkb2iPdj21Cty5G4paevOks/pJ4=');
  // console.log(x);

  return (
    <div className="App">
      <h1>Signature Verification</h1>
      <form onSubmit={e => bitcoinMessageVerify(e)}>
        <input placeholder="Address" />
        <br />
        <textarea placeholder="Message"></textarea>
        <br />
        <textarea placeholder="Signature"></textarea>
        <br />
        <button>Verify</button>
      </form>
      <div className="results">
        {isVerified !== '' ? (
          <>
            {isVerified.toString()}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
