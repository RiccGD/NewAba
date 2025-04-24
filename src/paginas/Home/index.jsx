import styles from './home.module.css'
import Cards from '../../componentes/Cards'
import GoogleSearchBar from '../../componentes/GoogleBar'


function Home(){
    

    return(
<section className={styles.home}>

        <GoogleSearchBar />
        
        <div className={styles.BaseForMore}>
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
