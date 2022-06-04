import styles from "./Filtros.module.scss";
import filtros from "./filtros.json";
import { useState } from "react";
import classNames from "classnames";

type IOpcao = typeof filtros[0];

interface Props {
	filtro: number | null;
	setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros({ filtro, setFiltro }: Props) {
	const [aberto, setAberto] = useState(false);

	function selecionarFiltro(opcao: IOpcao) {
		return setFiltro(opcao.id);
	}
	return (
			<div
				className={classNames({
					[styles.ordenador__options]: true,
					[styles["ordenador__options--ativo"]]: aberto,
				})}
			>
				{filtros.map((opcao) => (
					<button
						className={styles.ordenador__options}
						key={opcao.id}
						onClick={() => setAberto(!aberto)}
					>
						{opcao.label}
					</button>
				))}
			</div>
		
	);
}
