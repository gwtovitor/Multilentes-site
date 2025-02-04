import { ArrowRight, Mail, Msg } from '../utils/icons';
import styles from './talkingUs.module.scss';

export default function TalkingUs() {
	return (
		<div className={styles.talkingUs}>
			<div className={styles.wrapperForm}>
				<h1>Fale conosco</h1>
				<div className={styles.group}>
					<Mail /> <span>multilentes@multilentes.com.br</span>
				</div>
				<div className={styles.group}>
					<Msg />
					<span>(51) 993.483.947</span>
				</div>
                <div className={styles.form}>
                    <div className={styles.inputWrapper}>
                        <input placeholder='Seu nome'/>
                        <input placeholder='Seu email'/>
                    </div>
                    <textarea placeholder='Sua mensagem'/>
                    <button className={styles.btn}>Enviar <ArrowRight/></button>
                </div>
			</div>
            <div className={styles.imgWrapper}>
                <img src='/assets/HomeView/2.png'/>
            </div>
		</div>
	);
}
