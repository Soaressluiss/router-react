import React from 'react'
import { Link } from 'react-router-dom'
import imgError from '../assets/imgs/errorImg.svg'

const PageError = () => {
    return (
        <>
            <main className='containerPage'>
            <img className='imgPage' src={imgError} alt="imagem da pagina de error" />
            <Link to={'/'}>
                <button className='btnError' >Voltar a Home</button>
            </Link>
            </main>
        </>
    )
}

export default PageError;