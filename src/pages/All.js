import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/All.css";

export default function All() {
  // Létrehozunk két állapotot: a listát és az inputot
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const allUser = "https://api.github.com/users";

  useEffect(() => {
    allUser &&
      fetch(allUser)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setList(data);
        })
        .catch((err) => console.log("A hiba: " + err));
  }, []);

  // Az inputValue függvény frissíti az input állapotot a beírt szöveggel.
  const inputValue = (e) => {
    setInput(e.target.value);
  };

  // A searchInList változóban tároljuk a keresési eredményeket.
  const searchInList = list.filter((character) => {
    return character.login.toLowerCase().includes(input.toLowerCase());
  });

  return (
    <div>
      <div className="header">
        <input type="text" onChange={inputValue} placeholder="search..." />
      </div>
      <div className="users-container">
        {searchInList.map((user, index) => {
          return (
            <div className="users" id={index}>
              <h3>{user.login.toUpperCase()}</h3>
              <Link to={`/${user.login}`}>
                <img src={user.avatar_url} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
