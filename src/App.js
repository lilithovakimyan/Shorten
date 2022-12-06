import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const url = useRef(null);
  const [firstShortLink, setFirstShortLink] = useState("");
  const [secondShortLink, setSecondShortLink] = useState("");

  const handleRequest = (e) => {
    e.preventDefault();
    fetch(`https://api.shrtco.de/v2/shorten?url=${url.current.value}`)
      .then((response) => response.json())
      .then((data) => {
        setFirstShortLink(data.result.short_link);
        setSecondShortLink(data.result.short_link2);
      });
    url.current.value = "";
  };

  return (
    <div className="App">
      <form onSubmit={handleRequest}>
        <input type="text" required ref={url} />
        <input type="submit" value="shorten" />
        <p>{firstShortLink && `Short url: ${firstShortLink}`}</p>
        <p>{secondShortLink && `Short url 2: ${secondShortLink}`}</p>
      </form>
    </div>
  );
}

export default App;
