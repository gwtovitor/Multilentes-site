/* eslint-disable jsx-a11y/iframe-has-title */
import styles from './findUs.module.scss';
import { Location, Hour } from '../utils/icons';
export default function FindUs() {
	return (
		<div id="findus" className={styles.findUs}>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.9254015984975!2d-51.20469048814202!3d-30.01029832959056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979951a4956eb%3A0x3d84ec101e09c74e!2sAv.%20S%C3%A3o%20Pedro%2C%20720%20-%20201%20-%20S%C3%A3o%20Geraldo%2C%20Porto%20Alegre%20-%20RS%2C%2090230-123!5e0!3m2!1spt-BR!2sbr!4v1742847037825!5m2!1spt-BR!2sbr"
				className={styles.iframe}
				allowfullscreen=""
				loading="lazy"
			></iframe>

			<div className={styles.whereWeAre}>
				<h1>Onde Estamos</h1>
				<div className={styles.bodyWrapper}>
					<div className={styles.wrapper}>
						<Location />
						<span>
							Avenida São Pedro, Nº 720, Sala 201- Bairro São Geraldo-
							Porto Alegre- RS 90020-011
						</span>
					</div>
					<div className={styles.wrapper}>
						<Hour />
						<span>Segunda-feira á Sexta-feira das 9h às 17:30</span>
					</div>
				</div>
			</div>
		</div>
	);
}
