import { DashedLine } from '../Footer/Footer';
import styles from './imageView.module.scss';

export default function ImageView() {
	const images = [
		{ image: 'assets/ImageView/1.png', text: 'Óculos de Sol' },
		{ image: 'assets/ImageView/8.png', text: 'Óculos de Grau' },
		{ image: 'assets/ImageView/7.png', text: 'Lentes de contato' },
	];

	return (
		<div className={styles.imageView}>
			{images.map((image, i) => (
				<ImageViewComponent
					image={image.image}
					text={image.text}
					key={i}
				/>
			))}
		</div>
	);
}

function ImageViewComponent({ image, text }) {
	return (
		<div className={styles.internalImageView}>
			<img src={image} />
			<div className={styles.footer}>
				<DashedLine />
				<span>{text}</span>
			</div>
		</div>
	);
}
