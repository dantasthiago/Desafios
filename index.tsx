import styles from "./NavBar.module.scss";
import { useNavigate } from "react-router-dom";
import logo_pokemon from "../../assets/logo_pokemon.png";

export default function NavBar() {
	const navigate = useNavigate();
	return (
		<section>
			<div className={styles.header}>
				<div className={styles.logo}>
					<img src={logo_pokemon} alt='Logo Pokemon' />
				</div>
        </div>
				<div className={styles.botao}>
					<button
						onClick={() => {
							navigate("/inicio");
						}}
						className={styles.botao__home}
					>
						Home
					</button>
					<button
						onClick={() => {
							navigate("/pokemons");
						}}
						className={styles.botao__pokemons}
					>
						Pokemons
					</button>
					<button
						onClick={() => {
							navigate("/contato");
						}}
						className={styles.botao__contato}
					>
						Contato
					</button>
				</div>
			
		</section>
	);
}
