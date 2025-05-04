import { useState, useEffect } from 'react';
import styles from './BloNot.module.css'
import points from '../../../mages/BtnLista.png'

function BloNo(){
    const [texto, setTexto] = useState('');
    const [title,setTitle] = useState('');


    useEffect(() => {
        const notaSalva = localStorage.getItem('minhaNota');
        if (notaSalva) {
            setTexto(notaSalva);
        }
    },[]);
    useEffect(() => {
        const tituloNota = localStorage.getItem('tituloNota');
        if (tituloNota) {
            setTitle(tituloNota);
        }
    },[]);
    

    const salvarNota = () => {
        localStorage.setItem('minhaNota', texto);
        localStorage.setItem('tituloNota', title);
        alert('nota salva!')
    }


    return(
        <section className={styles.BlocoNotas}>
            <div className={styles.tituNo}>
                <textarea
                    className={styles.titleTex} 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Titulo aqui.." />
                
                <button><img src={points}></img></button>
            </div>
            
                <textarea
                className={styles.areaTex} 
                value={texto} 
                onChange={(e) => setTexto(e.target.value)}
                placeholder="Escreva sua Nota..." />

            <button onClick={salvarNota} className={styles.btnsalvar}>
                Salvar
            </button>
        </section>
    )
}

export default BloNo
