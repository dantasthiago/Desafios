import { useEffect, useState } from "react";
import styles from "./ListaPokemons.module.scss";
import Pokemon from "./Pokemon";
import http from "../../../http";


export default function ListaPokemons() {

	const [pokemons, setPokemons] = useState([]);
	

	useEffect(() => {
		http
			.get(`pokemon/`)
			.then(resposta => {
				setPokemons(resposta.data.results)
        ;
			})
			.catch((erro) => {
				console.log(erro);
			});
	}, []);

	
	return (
		<section className={styles.lista}>
			{pokemons?.map((item, index) => (
				<Pokemon pokemon={item} key={index} />
			))}
		</section>
	);
}
