import styles from './brandings.module.scss';
export default function Brandings() {
	const images = [
		'/assets/Brandings/logo1.png',
		'/assets/Brandings/logo2.png',
		'/assets/Brandings/logo3.png',
		'/assets/Brandings/logo4.png',
		'/assets/Brandings/logo5.png',
		'/assets/Brandings/logo6.png',
	];

	return (
		<div id="brandings" className={styles.brandings}>
			<div className={styles.wrapperImage}>
				{images.map((image, i) => (
					<img
						className={styles.img}
						src={image}
						key={`image_${i}`}
					/>
				))}
			</div>
		</div>
	);
}
