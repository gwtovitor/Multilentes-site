import { ArrowRight } from '../utils/icons';
import styles from './homeView.module.scss';
import { scrollToElement } from '../Footer/Footer';
export default function HomeView() {
	return (
		<div id="home" className={styles.homeView}>
			<div className={styles.leftSide}>
				<div className={styles.title}>
					<h1>Multilentes</h1>
					<span>
						Com mais de 40 anos de experiência, a Ótica Multilentes
						é sua escolha mais confiável para cuidados visuais em
						Porto Alegre. Oferecemos uma ampla seleção de óculos de
						grau, óculos solares e lentes de contato das melhores
						marcas, como Optolentes, Coopervision, Bauch & Lomb.
						Priorizamos a satisfação e a segurança do cliente,
						garantindo produtos de qualidade e atendimento
						especializado. Visite-nos e tenha sua visão cuidada com
						a máxima responsabilidade e atenção
					</span>
				</div>
				<div className={styles.btnWrapper}>
					<button
						onClick={() => scrollToElement('contact')}
						className={styles.contact}
					>
						Fale Conosco
					</button>
					<button
						onClick={() => scrollToElement('findus')}
						className={styles.howItWorks}
					>
						Onde Estamos <ArrowRight />
					</button>
				</div>
			</div>
			<div className={styles.rightSide}>
				<div className={styles.imgLeft}>
					<img
						className={styles.image1}
						src="/assets/HomeView/1.jpg"
					/>
					<img
						className={styles.image2}
						src="/assets/HomeView/3.jpg"
					/>
				</div>
				<div className={styles.imgRigth}>
					<img
						className={styles.image3}
						src="/assets/HomeView/2.jpg"
					/>
					<img
						className={styles.image4}
						src="/assets/HomeView/4.jpg"
					/>
				</div>
			</div>
		</div>
	);
}
