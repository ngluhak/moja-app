import React, { Component, useState, useEffect } from "react";
 
import ReactDOM from "react-dom";

import { GoHeart, GoArrowRight, GoTrashcan } from "react-icons/go";








class Stuff extends Component {
  render() {
    return (
      function App() {
        const [currentRec, setCurrentRec] = useState("rec");
        const [favoriteRecs, setFavoriteRecs] = useState([]);
      
        const getRec = () => {
          const url = "https://spoonacular.com/recipeImages/";
          fetch(url)
            .then(rsp => rsp.json())
            .then(data => setCurrentRec(data.rec));
        };
      
        const favoriteRec = rec => {
          setFavoriteRecs(favoriteRecs.concat(rec));
        };
      
        const removeFavorite = recToRemove => {
          setFavoriteRecs(
            favoriteRecs.filter(rec => {
              if (rec !== recToRemove) return true;
              return false;
            })
          );
        };
      
        const recInFavorites = rec => favoriteRecs.includes(rec);
      
        useEffect(() => {
          getRec();
        }, []);
      
        <main>
              <section className="rec-wrapper">
                <h1>Choose your favorite recipes</h1>
                <section className="rec-container">
                  <figure>
                    <img
                      className="rec-image"
                      src={currentRec}
                      alt="recipe"
                    />
                  </figure>
                  <ul className="rec-actions">
                    <li>
                      <button
                        className="heart-icon"
                        disabled={recInFavorites(currentRec)}
                        onClick={() => favoriteRec(currentRec)}
                      >
                        <GoHeart size="30" color="#f44336" />
                      </button>
                    </li>
                    <li>
                      <button onClick={getRec}>
                        <GoArrowRight size="30" />
                      </button>
                    </li>
                  </ul>
                </section>
                <ul className="favorite-recs">
                  {favoriteRecs.map(rec => (
                    <li key={rec}>
                      <img className="favorite-rec" src={rec} alt="favorited rec" />
                      <button onClick={() => removeFavorite(rec)}>
                        <GoTrashcan size="20" />
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            </main>
      }
    );
  }
}
 

export default Stuff;