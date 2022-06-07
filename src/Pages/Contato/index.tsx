import styles from "./Contato.module.scss";
import ash from "../../assets/ash.png";

export default function Contato() {
	return (
		<body>
			<div >
				<img className={styles.ash} src={ash} alt='imagem-ash' />
			</div>

			<h1 className={styles.h1}>Thiago Dantas</h1>
			<p className={styles.texto}>Email: thiagosmdantas@gmmail.com
			<p>Telefone: (19) 9-9939-8896</p>
			<p>Endereço: Rua Maria Simões de Andrade,1097 Artur Nogueira-SP</p>
			
			</p>
		</body>
	);
}
