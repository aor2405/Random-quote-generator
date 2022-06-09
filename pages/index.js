import Quote from '../components/Quote';
import React, { useState, useEffect } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import classes from '../components/Button.module.css';

function App() {
  const [quote, setQuote] = useState([]);
  const [ranQuote, setRanQuote] = useState(null);

  function getRanQuote() {
    if (!quote.length) return '';
    const len = quote.length;
    const i = Math.floor(Math.random() * len);
    const ranQuote = quote[i];
    return ranQuote.quote;
  }

  function buttonHandeler() {
    if (!quote.length) return;
    const singleQuote = getRanQuote();
    setRanQuote(singleQuote);
  }

  useEffect(async () => {
    await fetch('/api/quote')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quotes);
      });
  }, []);

  return (
    <Fragment>
      <div className="App">
        {quote.length ? (
          <div className="quote">
            {quote && <Quote quote={!!ranQuote ? ranQuote : getRanQuote()} />}
            <em className="author">Thomas O&apos;Reilly</em>
          </div>
        ) : (
          <div>Loading...</div>
        )}
        <button onClick={buttonHandeler} className={classes.button}>
          Click Me
        </button>
      </div>
    </Fragment>
  );
}

export default App;
