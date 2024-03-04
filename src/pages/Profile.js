import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Profile.css";

export default function Profile() {
  const [users, setUsers] = useState([]);

  const name = useParams();

  const user = `https://api.github.com/users/${name.name}`;

  useEffect(() => {
    name &&
      fetch(user)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setUsers([data]);
        })
        .catch((err) => alert("A hiba: " + err));
  }, [name]);

  return (
    <div className="user-container">
      {users.map((user) => {
        return (
          <div className="user">
            <h2>{user.name}</h2>
            <p> - {user.login} - </p>
            <p className="no-margin">
              <b>Location:</b> {user.location}
            </p>
            <p>
              <b>Company: </b>
              {user.company}
            </p>
            {user.email != null ? (
              <p className="no-margin">
                <b>Email: </b>
                {user.email}
              </p>
            ) : (
              <p className="no-margin">
                {" "}
                <b>Email not found!</b>{" "}
              </p>
            )}
            <p>
              <b>GitHub: </b>
              <Link>{user.html_url}</Link>
            </p>
            <p>
              <b>Repo: </b>
              <Link>{user.repos_url}</Link>
            </p>
            <img src={user.avatar_url} alt="" />
          </div>
        );
      })}
    </div>
  );
}
