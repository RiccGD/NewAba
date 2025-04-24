import styles from './cards.module.css'
import React from 'react' 

function Cards() {

    return(
        <section>
                <div className={styles.Tela}>
                    <div className={styles.opcoes}>
                      <h1>Qual opção você Deseja?</h1>
                      <button className={styles.Fav}>Favoritos</button>
                      <button className={styles.Mus}>Musica</button>
                      <button className={styles.BlNo}>Bloco Notas</button>
                      <button className={styles.Lis}>Lista</button>
                      <button className={styles.Quirvo}>Arquivos</button>
                      <div className={styles.Btn}>:/</div>
                    </div>
                </div>
        </section>
    )
}

export default Cards
