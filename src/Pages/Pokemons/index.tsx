import { useState } from "react";
import Buscador from "./Buscador";
import styles from "./Pokemons.module.scss";

export default function Pokemons() {
	const [busca, setBusca] = useState("");
	return (
		<>
			<div className={styles.texto}>
				Mais de 250 Pokemons para você escolher o seu favorito
			</div>
			<Buscador busca={busca} setBusca={setBusca} />
		</>
	);
}
