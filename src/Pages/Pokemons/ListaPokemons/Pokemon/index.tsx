import IPokemon from "../../../../interfaces/IPokemon";
import styles from "./Pokemon.module.scss";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

interface PokemonProps {
	pokemon: IPokemon;
}

export default function Pokemon({ pokemon }: PokemonProps) {
	const nome = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	const [pokemonID, setPokemonID] = useState([]);

	useEffect(() => {
		axios.get(pokemon.url).then((resposta) => {
			setPokemonID(resposta.data.id);
		});
	}, [pokemon.url]);

	return (
		<div className={styles.card}>
			{nome}

			<img
				className={styles.imagem}
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonID}.svg`}
				alt='imagem'
			/>
		</div>
	);
}
