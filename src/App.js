import { BrowserRouter } from "react-router-dom";
import Mainrouter from "./components/Mainrouter";
import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Mainrouter />
			</BrowserRouter>
		</div>
	);
}

export default App;
