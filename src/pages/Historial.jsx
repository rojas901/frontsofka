import React from 'react'

const Historial = () => {
    return (
        <div className='flex flex-col h-screen items-center'>
            <h1 className='font-extrabold text-5xl text-center mt-7'>Historial de jugadores</h1>
            <table className='mt-8 text-xl border border-black'>
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
