import styles from './404.module.css'


function Page404() {
    return(
        <>
            <h2 className={styles.titulo}>Algo de errado não está certo!</h2>
            <div className={styles.divR}>
                <span className={styles.Btext}>404</span>
                <strong className={styles.Minitext}>Página não localizada!</strong>
            </div>
        </>
    )
}

export default Page404