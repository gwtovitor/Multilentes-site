import NavBar from '../../components/NavBar/NavBar'
import styles from './home.module.scss'

export default function Home(){
    return(
        <div className={styles.home}>
            <NavBar/>
        </div>
    )
}