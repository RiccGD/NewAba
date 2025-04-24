import Header from '../../componentes/Header'
import Footer from '../../componentes/Footer'
import Container from '../../componentes/Container'
import { Outlet } from 'react-router-dom'

function PageBase(){
    return(
        <>
        <Header />
        <Container>
            <Outlet/>
        </Container>
        <Footer />
        </>
    )
}

export default PageBase