import { useQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GET_JUGADORES } from '../graphql/jugadores/queries'

const Historial = () => {

    const { data, error, loading } = useQuery(GET_JUGADORES);

    useEffect(() => {
        if (data) {
            console.log('datos:', data)
        }

        if (loading) {
            return <div>Cargando...</div>
        }

        if (error) {
            console.log('Error consultando:', error)
            return <div>Error consultando datos</div>
        }

    }, [data, loading, error])

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
                    {data && data.Jugadores ? (
                        <>
                            {data.Jugadores.map((jugador) => {
                                return (
                                    <tr key={jugador._id}>
                                        <td className='px-16 text-center'>{jugador.nombre}</td>
                                        <td className='px-16 text-center'>{jugador.puntaje}</td>
                                        <td className='px-16 text-center'>{jugador.fecha}</td>
                                    </tr>
                                )
                            })}
                        </>
                    ) : (<div>No se pudo acceder a los datos</div>)}
                    <tr>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Historial
