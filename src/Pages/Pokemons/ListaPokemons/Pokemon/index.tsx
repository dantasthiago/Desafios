import IPokemon from "../../../../interfaces/IPokemon";
import styles from "./Pokemon.module.scss";
import classNames from "classnames";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

interface PokemonProps {
	pokemon: IPokemon;
}

export default function Pokemon({ pokemon }: PokemonProps) {
	const nome = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	const [pokemonID, setPokemonID] = useState([]);
	const [pokemonTipo, setPokemonTipo] = useState([]);


	// const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/`;
	// const pokemonID = [1];

	useEffect(() => {
		axios.get(pokemon.url).then((resposta) => {
			// console.log(resposta);

			setPokemonID((resposta.data.id));
			// console.log(pokemonID);
		});
	}, [pokemon.url]);
	// console.log(pokemon);

  // useEffect(() => {
	// 	axios.get(pokemon.url).then((resposta) => {
	// 		console.log(resposta);

	// 		setPokemonTipo((resposta.data.types.base_data[0].type));
	// 		console.log(pokemonTipo);
	// 	});
	// }, [pokemon.url]);
	// // console.log(pokemon);

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

// const pokemonContainers = document.querySelectorAll('.pokemon-container');
// for (const container of pokemonContainers) {
//   const pokemonName = container.querySelector('.pokemon-name');
//   const pokemonImage = container.querySelector('.pokemon-image');
//   const random = Math.floor(Math.random() * 256 + 1);
//   axios.get(`https://pokeapi.co/api/v2/pokemon/${random}`)
//   .then(json => {
//       pokemonName.innerHTML = json.data.forms[0].name;
//       pokemonImage.src = json.data.sprites.front_default;
//   })
//   .catch(error => {
//       console.error('error in request', error);
//       pokemonName.innerHTML = "An error has occurred.";
//       pokemonImage.src = "";
//   })
// }
// }
