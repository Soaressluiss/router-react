import React from 'react'
import { Link } from 'react-router-dom'

const PageError = () => {
    return (
        <>
            <h3>PageError</h3>
            <Link to={'/'}>
                <button >Voltar a Home</button>
            </Link>
        </>
    )
}

export default PageError;