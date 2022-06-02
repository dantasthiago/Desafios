import BannerComplete from "../../assets/BannerComplete.png";
import styles from "./Inicio.module.scss";
import NavBar from "../../components/NavBar";

export default function Inicio() {
	return (
		<>
			<NavBar />
			<div className={styles.banner}>
				<img src={BannerComplete} alt='Banner Pokemon' />
			</div>

			<div className={styles.texto}>
				<p className={styles.texto__texto1}>Qual pokemon você escolheria?</p>
				<p className={styles.subtexto}>
					Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e
					habilidades.
				</p>
                
				<button className={styles.vejaMais}>
					Veja os Pokemons
				</button>
                
			</div>
		</>
	);
}
