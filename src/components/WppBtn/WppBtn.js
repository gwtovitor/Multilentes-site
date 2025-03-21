
import styles from './wppBtn.module.scss'


export default function WppBtn(){

    function openWhatsapp(){
        window.open("https://wa.link/ammyir", "_blank")
    }

    return(
        <div className={styles.wpp}>
            <img onClick={()=>{openWhatsapp()}} src='/assets/wpp/wpp.png'/>
        </div>
    )
}