import { BrowserRouter } from "react-router-dom";
import DriverRouter from "./components/DriverRouter";
import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<DriverRouter />
			</BrowserRouter>
		</div>
	);
}

export default App;
