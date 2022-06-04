import { useState } from "react";
import Ordenador from './Ordenador'
import Buscador from "./Buscador";
import styles from "./Pokemons.module.scss";
import Filtros from './Filtros';

export default function Pokemons() {
	const [busca, setBusca] = useState('');
	const [filtro, setFiltro] = useState<number | null>(null);
	return (
		<>
			<div className={styles.texto}>
				Mais de 250 Pokemons para você escolher o seu favorito
			</div>
			<Buscador busca={busca} setBusca={setBusca} />
			<Filtros filtro={filtro} setFiltro={setFiltro} />
			<Ordenador/>
		</>
	);
}
