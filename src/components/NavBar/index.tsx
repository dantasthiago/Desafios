import styles from "./NavBar.module.scss";
import logo_pokemon from "../../assets/logo_pokemon.png";
import { Link } from "react-router-dom";

export default function NavBar() {
	const rotas = [
		{
			label: "Inicio",
			to: "/",
		},
		{
			label: "Pokemons",
			to: "/pokemons",
		},
		{
			label: "Contato",
			to: "/contato",
		},
	];

	return (
		<>
			<div className={styles.menu}>
				<div className={styles.logo}>
					<img src={logo_pokemon} alt='Logo Pokemon' />
				</div>
			<ul className={styles.menu__list}>
				{rotas.map((rota, index) => (
					<li key={index} className={styles.menu__link}>
						<Link to={rota.to}>{rota.label}</Link>
					</li>
				))}
			</ul>
				</div>
		</>
	);
}
