import React from 'react'
import { Link } from 'react-router-dom'

const Historial = () => {
    return (
        <div className='flex flex-col h-screen items-center'>
            <h1 className='font-extrabold text-5xl text-center mt-7'>Historial de jugadores</h1>
            <Link to='/'>
                <button className='text-2xl p-3 mt-4 rounded-3xl bg-blue-600 hover:bg-blue-300'>Inicio</button>
            </Link>
            <table className='mt-6 text-xl border border-black'>
                <thead>
                    <tr>
                        <th className='px-16'>Nombre</th>
                        <th className='px-16'>Puntaje</th>
                        <th className='px-16'>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='px-16 text-center'>Carlos</td>
                        <td className='px-16 text-center'>100</td>
                        <td className='px-16 text-center'>12-03-04, 05:06 p.m.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Historial
