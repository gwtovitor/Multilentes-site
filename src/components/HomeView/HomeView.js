import { ArrowRight } from '../utils/icons'
import styles from './homeView.module.scss';

export default function HomeView() {
	return (
		<div id='home' className={styles.homeView}>
			<div className={styles.leftSide}>
				<div className={styles.title}>
					<h1>Um atendimento de excelência</h1>
					<span>
						A Multilentes oferece um atendimento qualificado,
						personalizado e comprometido com a sua necessidade.{' '}
					</span>
				</div>
				<div className={styles.btnWrapper}>
					<button className={styles.contact}>Fale Conosco</button>
					<button className={styles.howItWorks}>Como funciona <ArrowRight/></button>
				</div>
			</div>
			<div className={styles.rightSide}>
				<div className={styles.imgLeft}>
					<img
						className={styles.image1}
						src="/assets/HomeView/1.png"
					/>
					<img
						className={styles.image2}
						src="/assets/HomeView/2.png"
					/>
				</div>
				<div className={styles.imgRigth}>
					<img
						className={styles.image3}
						src="/assets/HomeView/3.png"
					/>
					<img
						className={styles.image4}
						src="/assets/HomeView/4.png"
					/>
				</div>
			</div>
		</div>
	);
}
