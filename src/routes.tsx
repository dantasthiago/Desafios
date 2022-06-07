import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Inicio from "./Pages/Inicio";
import Pokemons from './Pages/Pokemons';
import Contato from './Pages/Contato'
export default function AppRouter() {
	return (
			<Router>
        <NavBar/>
				<Routes>
					<Route path='/' element={<Inicio />} />
          <Route path='/pokemons' element={<Pokemons/>}/>
          <Route path='/contato' element={<Contato/>}/>
				</Routes>
			</Router>
	);
}
