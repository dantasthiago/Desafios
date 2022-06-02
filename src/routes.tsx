import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Inicio from "./Pages/Inicio";
import Pokemons from './Pages/Pokemons';
export default function AppRouter() {
	return (
			<Router>
        <NavBar/>
				<Routes>
					<Route path='/' element={<Inicio />} />
          <Route path='/pokemons' element={<Pokemons/>}/>
				</Routes>
			</Router>
	);
}
