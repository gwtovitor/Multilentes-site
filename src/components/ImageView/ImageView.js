import styles from './imageView.module.scss';
export default function ImageView() {
	return (
		<div className={styles.imageView}>
			<div className={styles.imageView1}>
				<img src="assets/ImageView/1.png" />
			</div>
			<div className={styles.imageView2}>
				<img src="assets/ImageView/2.png" />
				<img src="assets/ImageView/3.png" />
			</div>
			<div className={styles.imageView3}>
				<img src="assets/ImageView/4.png" />
			</div>
			<div className={styles.imageView4}>
				<img src="assets/ImageView/5.png" />
				<img src="assets/ImageView/6.png" />
			</div>
			<div className={styles.imageView5}>
				<img src="assets/ImageView/7.png" />
			</div>
		</div>
	);
}
