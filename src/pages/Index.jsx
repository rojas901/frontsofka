import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <div className='flex flex-col h-screen justify-center'>
            <div className='border-8 border-emerald-500 m-40 rounded-3xl'>
                <h1 className='font-extrabold text-5xl text-center'>Bienvenido</h1>
                <p className='p-10 text-center text-3xl'>Vamos a jugar preguntas y respuestas, para empezar oprime el boton jugar, o si deseas ver el historial de jugadores, presiona el boton historial.</p>
                <div className='flex justify-around'>
                    <Link to='/juego'>
                        <button className='text-2xl p-3 mb-2 rounded-3xl bg-lime-600 hover:bg-lime-300'>Jugar</button>
                    </Link>
                    <Link to='/historial'>
                    <button className='text-2xl p-3 mb-2 rounded-3xl bg-teal-600 hover:bg-teal-300'>Historial</button>
                    </Link>                    
                </div>
            </div>
        </div>
    )
}

export default Index
