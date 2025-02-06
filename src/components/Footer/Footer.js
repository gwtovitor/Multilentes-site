import styles from './footer.module.scss';

export default function Footer() {
	function scrollToElement(elementId) {
		const element = document.getElementById(elementId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'center' });
		} 
	}
	
	return (
		<div className={styles.footerWrapper}>
			<div className={styles.message}>
				<span>
					ATENÇÃO: NOSSO OBJETIVO É VENDER LENTES DE CONTATO PARA QUEM
					FEZ ADAPTAÇÃO COM MÉDICO OFTALMOLOGISTA E RECEBEU ORIENTAÇÃO
					ADEQUADA, QUANTO AO USO E CUIDADOS. CONSULTE REGULARMENTE
					SEU MÉDICO OFTALMOLOGISTA PARA AVALIAR A SAÚDE DE SEUS OLHOS
					E SABER SE PODE USAR OU CONTINUAR USANDO LENTES DE CONTATO.
				</span>
			</div>
			<div className={styles.footer}>
				<div className={styles.header}>
					<div className={styles.leftSide}>
						<img src="/assets/logoBgBlack.png" />
						<span>
							Av. São Pedro, 714 – São Geraldo – Porto Alegre/RS –
							90230-123
						</span>
						<span>CNPJ: 02.233.451/0001-02</span>
					</div>
					<div className={styles.rigthSide}>
						<span onClick={()=>scrollToElement('home')}>Home</span>
						<span onClick={()=>scrollToElement('brandings')}>Produtos</span>
						<span onClick={()=>scrollToElement('findus')}>Onde Estamos</span>
						<span onClick={()=>scrollToElement('contact')}>Contato</span>
					</div>
				</div>
                <DashedLine/>
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

function DashedLine() {
    return <div style={{ borderTop: "2px dashed #888", width: "100%", margin: "10px 0" }} />;
  }
  