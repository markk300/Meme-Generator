import React, { useState,useEffect } from "react";


const Form = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
}, [])

  const getMemeImage = (event) => {
    
    const randomNumber = Math.floor(Math.random() * allMemes.length);

    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => {
      return { ...prevMeme, randomImage: url };
    });

    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };
  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Shut up"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="and take my money"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button onClick={getMemeImage} className="form--button">
          Generate Meme
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="Generated Meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};
export default Form;
