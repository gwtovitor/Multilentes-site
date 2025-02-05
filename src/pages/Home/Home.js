import Brandings from '../../components/Bradings/Brandings';
import FindUs from '../../components/FindUs/FindUs'
import Footer from '../../components/Footer/Footer'
import HomeView from '../../components/HomeView/HomeView';
import ImageView from '../../components/ImageView/ImageView';
import NavBar from '../../components/NavBar/NavBar';
import TalkingUs from '../../components/TalkingUs/TalkingUs'
import styles from './home.module.scss';

export default function Home() {
	return (
		<div className={styles.home}>
			<NavBar />
			<HomeView />
			<Brandings />
			<ImageView />
			<FindUs/>
			<TalkingUs/>
			<Footer/>
		</div>
	);
}
