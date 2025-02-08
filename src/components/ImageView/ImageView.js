import { DashedLine } from '../Footer/Footer';
import styles from './imageView.module.scss';

export default function ImageView() {
	const images = [
		{ image: 'assets/ImageView/1.png', text: 'Óculos de Sol' },
		{ image: 'assets/ImageView/2.png', text: 'Óculos de Grau' },
		{ image: 'assets/ImageView/3.png', text: 'Óculos Clip-On' },
		// { image: 'assets/ImageView/4.png', text: 'Óculos de Sol' },
		{ image: 'assets/ImageView/5.png', text: 'Óculos de Grau' },
		{ image: 'assets/ImageView/6.png', text: 'Óculos Clip-On' },
		{ image: 'assets/ImageView/7.png', text: 'Óculos de Sol' },
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
