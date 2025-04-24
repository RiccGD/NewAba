import styles from './sobre.module.css'

function Sobre(){
    return(
        <section className={styles.molde}>
            <div className={styles.DoubleBox}>

                <div className={styles.textBase}>
                    <h2>Criador</h2>
                    <p>Eu o criador explicarei o motivo da Criação, eu toda vez que abria uma nova aba ele estava em outro navegador
 e algumas partes dele estavam fora de meu controle, então aqui está uma forma de otimizar com tudo que eu possa fazer para ajudar, ainda irei fazer mais
 estenções porém uma coisa de cada vez.
                    </p>
                </div>
                <div className={styles.textBase}>
                    <h1>Criação</h1>
                    <p> Em função de ajudar os usuários de forma que não atrapalhe com funções desnecessárias, as funções são divididas
 em partes que você pode escolher quais deseja para adicionar à nova aba, alguns exemplos:</p>
                    <ul>
                        <li>Músicas</li>
                        <li>Calculadora</li>
                        <li>GitHub</li>
                    </ul>
                </div>
                
            </div>
        </section>
    )
}

export default Sobre
