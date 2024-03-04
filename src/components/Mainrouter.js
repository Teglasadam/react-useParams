import { Routes, Route } from "react-router-dom";
import All from "../pages/All";
import Profile from "../pages/Profile";

export default function DriverRouter() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<All />} />
				<Route path="/:name" element={<Profile />} />
			</Routes>
		</div>
	);
}
