import styles from './music.module.css'
import disco from '../../../mages/vinildisq.png'
import btn1 from '../../../mages/btn1.png'
import btn2 from '../../../mages/btn2.png'
import btn3 from '../../../mages/btn3.png'
import btn4 from '../../../mages/btn4.png'
import play from '../../../mages/btnplay.png'
import stop from '../../../mages/Pause.png'
import list from '../../../mages/btnLista.png'
import repit from '../../../mages/BtnIrepetir.png'

function Music(){
    return(
        <section className={styles.disco}>

            <div className={styles.basCi}>
                    <img className={styles.mage} src={disco} alt='imagem' />
                    <h1>Nome</h1>
            </div>

            <div className={styles.basBa}>
                <div className={styles.barplay}>

                    <button className={styles.close}>X</button>
                    <button className={styles.btn}><img className={styles.btnMage} src={play} /></button>

                    <div className={styles.barra}></div>

                    <div className={styles.btns}>
                        <button><img className={styles.btnMage} src={btn2} /></button>
                        <button><img className={styles.btnMage} src={btn3} /></button>
                        <button><img className={styles.btnMage} src={btn4} /></button>
                        <button><img className={styles.btnMage} src={btn1} /></button>

                        <button><img className={styles.btnMage} src={repit} /></button>
                        <button>+</button>
                        <button><img className={styles.btnMage} src={list} /></button>
                     </div>
                </div>
                
            </div>

        </section>
    )
}

export default Music
