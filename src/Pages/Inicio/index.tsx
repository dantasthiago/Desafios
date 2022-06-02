import BannerComplete from "../../assets/BannerComplete.png";
import styles from "./Inicio.module.scss";
import NavBar from "../../components/NavBar";
import { useNavigate } from 'react-router-dom';

export default function Inicio() {
	const navigate = useNavigate()
	return (
		<>
			<div className={styles.banner}>
				<img src={BannerComplete} alt='Banner Pokemon' />
			</div>

			<div className={styles.texto}>
				<p className={styles.texto__texto1}>Qual pokemon você escolheria?</p>
				<p className={styles.subtexto}>
					Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e
					habilidades.
				</p>
                
				<button onClick={()=>{ navigate('/pokemons')}} className={styles.vejaMais}>
					Veja os Pokemons
				</button>
                
			</div>
		</>
	);
}
