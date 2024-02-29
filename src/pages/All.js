import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/All.css";

export default function All() {
	const [list, setList] = useState([]);

	const login = useParams();

	useEffect(() => {
		fetch("https://api.github.com/users")
			.then((res) => res.json())
			.then((data) => setList(data))
			.catch((err) => console.log("A hiba: " + err));
	}, []);


	return (
		<div className="user-container">
			{list.map((user) => {
				return (
					<div className="user">
						<h2>Login name: </h2>
						<h3>{user.login}</h3>
						<p>{user.avatar_url}</p>
						<Link to={`/${user.login}`}>
							<img src={user.avatar_url} alt="" />
						</Link>
					</div>
				);
			})}
		</div>
	);
}

/* kell egy kereso ahol az oldalt ahol minden felhasdznalo megjelenik ott lehessen szurni arra hogy kit keresunk */
