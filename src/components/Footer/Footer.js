import styles from './footer.module.scss';

export function scrollToElement(elementId) {
	const element = document.getElementById(elementId);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth', block: 'center' });
	}
}
export default function Footer() {
	return (
		<div className={styles.footerWrapper}>
			<div className={styles.message}>
				<span>
					Nossa equipe é composta de técnicos ópticos e profissionais
					com vasta experiência em lentes de contato e óculos de grau.
					Nosso compromisso é com a saúde visual e a satisfação dos
					nossos clientes.
				</span>
			</div>
			<div className={styles.footer}>
				<div className={styles.header}>
					<div className={styles.leftSide}>
						<img src="/assets/logoBgBlack.png" />
						<span>
							Avenida São Pedro, 720 sala 201- Bairro São Geraldo-
							Porto Alegre- RS 90230-123
						</span>
						<span>Estacionamento av. São Pedro, 754 e 733</span>
						<span>Segunda a sexta das 9h às 17:30</span>
						<span>multilentes@multilentes.com.br</span>
						<span>(51) 3012-0226</span>
						<span>CNPJ: 55.691.684/0001-07</span>
					</div>
					<div className={styles.rigthSide}>
						<span onClick={() => scrollToElement('home')}>
							Home
						</span>
						<span onClick={() => scrollToElement('brandings')}>
							Produtos
						</span>
						<span onClick={() => scrollToElement('findus')}>
							Onde Estamos
						</span>
						<span onClick={() => scrollToElement('contact')}>
							Contato
						</span>
					</div>
				</div>
				<DashedLine />
				<div className={styles.copyrigth}>
					<span>Desenvolvido por Pixel Space</span>
					<span>
						© Óptica Multilentes – Óculos e Lentes de Contato Porto
						Alegre 2020. All rights reserved.
					</span>
				</div>
			</div>
		</div>
	);
}

export function DashedLine() {
	return (
		<div
			style={{
				borderTop: '2px dashed #888',
				width: '100%',
				margin: '10px 0',
			}}
		/>
	);
}
