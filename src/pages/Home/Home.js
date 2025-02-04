import Brandings from '../../components/Bradings/Brandings';
import HomeView from '../../components/HomeView/HomeView';
import ImageView from '../../components/ImageView/ImageView';
import NavBar from '../../components/NavBar/NavBar';
import styles from './home.module.scss';

export default function Home() {
	return (
		<div className={styles.home}>
			<NavBar />
			<HomeView />
			<Brandings />
			<ImageView />
		</div>
	);
}
