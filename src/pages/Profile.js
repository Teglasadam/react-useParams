import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Profile({name}) {
	const [list, setList] = useState([]);




	useEffect(() => {
		fetch(`https://api.github.com/users/${name}`)
			.then((res) => res.json())
			.then((data) => setList(data))
			.catch((err) => console.log("A hiba: " + err));

	}, []);


	return (
		<div className="user-container">
			{list.map((user, index) => {
				return (
					<div className="user" id={index}>
						<h2>Login name: </h2>
						<h3>{user.login}</h3>
						<p>{user.avatar_url}</p>
						<Link to={`/${user.login}`}><img src={user.avatar_url} alt="" /></Link>
					</div>
				);
			})}
		</div>
	);
}
