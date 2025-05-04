import styles from './home.module.css'
import Cards from '../../componentes/Cards'
import GoogleSearchBar from '../../componentes/GoogleBar'
import Music from '../../componentes/Opções/Music'
import BloNo from '../../componentes/Opções/BlocoDeNotas'


function Home(){
    

    return(
<section className={styles.home}>

        <GoogleSearchBar />
        
        <div className={styles.BaseForMore}>
            <Music />

            <BloNo />

            <div className={styles.card}>
                <button>
                +
                </button>
            </div>
        </div>
        <Cards />

</section>
    )
}

export default Home
