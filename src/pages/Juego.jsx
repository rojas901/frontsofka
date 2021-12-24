import { useMutation, useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { GET_PREGUNTAS } from '../graphql/preguntas/queries';
import { CREAR_JUGADOR } from '../graphql/jugadores/mutations';

const Juego = () => {
    
    const [nombre, setNombre] = useState('')
    const [index, setIndex] = useState(1);
    const [puntaje, setPuntaje] = useState(0);
    const { data, error, loading } = useQuery(GET_PREGUNTAS);
    const [crearJugador] = useMutation(CREAR_JUGADOR);

    useEffect(() => {

        if (data && data.Preguntas) {
            console.log(data.Preguntas)
        }

        if (loading) {
            return <div>Cargando...</div>
        }

        if (error) {
            console.log('Error consultando:', error)
            return <div>Error consultando datos</div>
        }

    }, [data, loading, error])

    const modificarContador = () => {
        setPuntaje(puntaje + index * 10)
        setIndex(index + 1)
    }

    const finJuego = () => {
        setPuntaje(0)
        setIndex(6)
    }

    // const abandonarJuego = () => {

    // }

    let preguntasElegidas = [];

    if (data && data.Preguntas) {

        let filtro;

        for (let i = 1; i < 6; i++) {
            filtro = data.Preguntas.filter((pregunta) => { return pregunta.categoria === String(i) })
            preguntasElegidas.push(filtro[Math.floor(Math.random() * 5)]);
        }


    }

    console.log('preguntas t:', preguntasElegidas)

    if (!data) {
        return <div>No hay datos</div>
    }else if (index === 1) {
        return (
            <div>
                <div className='flex flex-col h-screen justify-center'>
                    <div className='border-8 border-yellow-400 m-40 rounded-3xl'>
                        <div className='flex justify-around px-40 mt-10'>
                            <h1 className='font-extrabold text-5xl text-center'>Puntaje {puntaje}</h1>
                            <h1 className='font-extrabold text-5xl text-center'>Ronda {index}</h1>
                        </div>
                        <h1 className='text-4xl text-center mt-8'>{preguntasElegidas[0].texto}</h1>
                        <div className='flex justify-between px-40 mt-10'>
                            <button
                                className='text-2xl py-3 px-20 mb-2 rounded-3xl bg-sky-600 hover:bg-sky-300'
                                onClick={
                                    preguntasElegidas[0].opcion1 === preguntasElegidas[0].correcto ? modificarContador : finJuego 
                                }>{preguntasElegidas[0].opcion1}</button>
                            <button
                                className='text-2xl py-3 px-20 mb-2 rounded-3xl bg-sky-600 hover:bg-sky-300'
                                onClick={
                                    preguntasElegidas[0].opcion2 === preguntasElegidas[0].correcto ? modificarContador : finJuego 
                                }>{preguntasElegidas[0].opcion2}</button>
                        </div>
                        <div className='flex justify-between px-40 mt-10'>
                            <button
                                className='text-2xl py-3 px-20 mb-2 rounded-3xl bg-sky-600 hover:bg-sky-300'
                                onClick={
                                    preguntasElegidas[0].opcion3 === preguntasElegidas[0].correcto ? modificarContador : finJuego 
                                }>{preguntasElegidas[0].opcion3}</button>
                            <button
                                className='text-2xl py-3 px-20 mb-2 rounded-3xl bg-sky-600 hover:bg-sky-300'
                                onClick={
                                    preguntasElegidas[0].opcion4 === preguntasElegidas[0].correcto ? modificarContador : finJuego 
                                }>{preguntasElegidas[0].opcion4}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else if (index === 2) {
        return (
            <div>
                <div className='flex flex-col h-screen justify-center'>
                    <div className='border-8 border-yellow-400 m-40 rounded-3xl'>
                        <div className='flex justify-around px-40 mt-10'>
                            <h1 className='font-extrabold text-5xl text-center'>Puntaje {puntaje}</h1>
                            <h1 className='font-extrabold text-5xl text-center'>Ronda {index}</h1>
                        </div>
                        <h1 className='text-4xl text-center mt-8'>{preguntasElegidas[1].texto}</h1>
                        <div className='flex justify-between px-40 mt-10'>
                            <button
                                className='text-2xl py-3 px-20 mb-2 rounded-3xl bg-sky-600 hover:bg-sky-300'
                                onClick={
                                    preguntasElegidas[1].opcion1 === preguntasElegidas[1].correcto ? modificarContador : finJuego 
                                }>{preguntasElegidas[1].opcion1}</button>
                            <button
                                className='text-2xl py-3 px-20 mb-2 rounded-3xl bg-sky-600 hover:bg-sky-300'
                                onClick={
                                    preguntasElegidas[1].opcion2 === preguntasElegidas[1].correcto ? modificarContador : finJuego 
                                }>{preguntasElegidas[1].opcion2}</button>
                        </div>
                        <div className='flex justify-between px-40 mt-10'>
                            <button
                                className='text-2xl py-3 px-20 mb-2 rounded-3xl bg-sky-600 hover:bg-sky-300'
                                onClick={
                                    preguntasElegidas[1].opcion3 === preguntasElegidas[1].correcto ? modificarContador : finJuego 
                                }>{preguntasElegidas[1].opcion3}</button>
                            <button
                                className='text-2xl py-3 px-20 mb-2 rounded-3xl bg-sky-600 hover:bg-sky-300'
                                onClick={
                                    preguntasElegidas[1].opcion4 === preguntasElegidas[1].correcto ? modificarContador : finJuego 
                                }>{preguntasElegidas[1].opcion4}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else if (index === 3) {
        return (
            <div>
                <div className='flex flex-col h-screen justify-center'>
                    <div className='border-8 border-yellow-400 m-40 rounded-3xl'>
                        <div className='flex justify-around px-40 mt-10'>
                            <h1 className='font-extrabold text-5xl text-center'>Puntaje {puntaje}</h1>
                            <h1 className='font-extrabold text-5xl text-center'>Ronda {index}</h1>
                        </div>
                        <h1 className='text-4xl text-center mt-8'>{preguntasElegidas[2].texto}</h1>
                        <div className='flex justify-between px-40 mt-10'>
                            <button
                                className='text-2xl py-3 px-20 mb-2 rounded-3xl bg-sky-600 hover:bg-sky-300'
                                onClick={
                                    preguntasElegidas[2].opcion1 === preguntasElegidas[2].correcto ? modificarContador : finJuego 
                                }>{preguntasElegidas[2].opcion1}</button>
                            <button
                                className='text-2xl py-3 px-20 mb-2 rounded-3xl bg-sky-600 hover:bg-sky-300'
                                onClick={
                                    preguntasElegidas[2].opcion2 === preguntasElegidas[2].correcto ? modificarContador : finJuego 
                                }>{preguntasElegidas[2].opcion2}</button>
                        </div>
                        <div className='flex justify-between px-40 mt-10'>
                            <button
                                className='text-2xl py-3 px-20 mb-2 rounded-3xl bg-sky-600 hover:bg-sky-300'
                                onClick={
                                    preguntasElegidas[2].opcion3 === preguntasElegidas[2].correcto ? modificarContador : finJuego 
                                }>{preguntasElegidas[2].opcion3}</button>
                            <button
                                className='text-2xl py-3 px-20 mb-2 rounded-3xl bg-sky-600 hover:bg-sky-300'
                                onClick={
                                    preguntasElegidas[2].opcion4 === preguntasElegidas[2].correcto ? modificarContador : finJuego 
                                }>{preguntasElegidas[2].opcion4}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else if (index === 4) {
        return (
            <div>
                <div className='flex flex-col h-screen justify-center'>
                    <div className='border-8 border-yellow-400 m-40 rounded-3xl'>
                        <div className='flex justify-around px-40 mt-10'>
                            <h1 className='font-extrabold text-5xl text-center'>Puntaje {puntaje}</h1>
                            <h1 className='font-extrabold text-5xl text-center'>Ronda {index}</h1>
                        </div>
                        <h1 className='text-4xl text-center mt-8'>{preguntasElegidas[3].texto}</h1>
                        <div className='flex justify-between px-40 mt-10'>
                            <button
                                className='text-2xl py-3 px-20 mb-2 rounded-3xl bg-sky-600 hover:bg-sky-300'
                                onClick={
                                    preguntasElegidas[3].opcion1 === preguntasElegidas[3].correcto ? modificarContador : finJuego 
                                }>{preguntasElegidas[3].opcion1}</button>
                            <button
                                className='text-2xl py-3 px-20 mb-2 rounded-3xl bg-sky-600 hover:bg-sky-300'
                                onClick={
                                    preguntasElegidas[3].opcion2 === preguntasElegidas[3].correcto ? modificarContador : finJuego 
                                }>{preguntasElegidas[3].opcion2}</button>
                        </div>
                        <div className='flex justify-between px-40 mt-10'>
                            <button
                                className='text-2xl py-3 px-20 mb-2 rounded-3xl bg-sky-600 hover:bg-sky-300'
                                onClick={
                                    preguntasElegidas[3].opcion3 === preguntasElegidas[3].correcto ? modificarContador : finJuego 
                                }>{preguntasElegidas[3].opcion3}</button>
                            <button
                                className='text-2xl py-3 px-20 mb-2 rounded-3xl bg-sky-600 hover:bg-sky-300'
                                onClick={
                                    preguntasElegidas[3].opcion4 === preguntasElegidas[3].correcto ? modificarContador : finJuego 
                                }>{preguntasElegidas[3].opcion4}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else if (index === 5) {
        return (
            <div>
                <div className='flex flex-col h-screen justify-center'>
                    <div className='border-8 border-yellow-400 m-40 rounded-3xl'>
                        <div className='flex justify-around px-40 mt-10'>
                            <h1 className='font-extrabold text-5xl text-center'>Puntaje {puntaje}</h1>
                            <h1 className='font-extrabold text-5xl text-center'>Ronda {index}</h1>
                        </div>
                        <h1 className='text-4xl text-center mt-8'>{preguntasElegidas[4].texto}</h1>
                        <div className='flex justify-between px-40 mt-10'>
                            <button
                                className='text-2xl py-3 px-20 mb-2 rounded-3xl bg-sky-600 hover:bg-sky-300'
                                onClick={
                                    preguntasElegidas[4].opcion1 === preguntasElegidas[4].correcto ? modificarContador : finJuego 
                                }>{preguntasElegidas[4].opcion1}</button>
                            <button
                                className='text-2xl py-3 px-20 mb-2 rounded-3xl bg-sky-600 hover:bg-sky-300'
                                onClick={
                                    preguntasElegidas[4].opcion2 === preguntasElegidas[4].correcto ? modificarContador : finJuego 
                                }>{preguntasElegidas[4].opcion2}</button>
                        </div>
                        <div className='flex justify-between px-40 mt-10'>
                            <button
                                className='text-2xl py-3 px-20 mb-2 rounded-3xl bg-sky-600 hover:bg-sky-300'
                                onClick={
                                    preguntasElegidas[4].opcion3 === preguntasElegidas[4].correcto ? modificarContador : finJuego 
                                }>{preguntasElegidas[4].opcion3}</button>
                            <button
                                className='text-2xl py-3 px-20 mb-2 rounded-3xl bg-sky-600 hover:bg-sky-300'
                                onClick={
                                    preguntasElegidas[4].opcion4 === preguntasElegidas[4].correcto ? modificarContador : finJuego 
                                }>{preguntasElegidas[4].opcion4}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else if (index === 6) {
        return (
            <div>
                <div className='flex flex-col h-screen justify-center'>
                    <div className='border-8 border-yellow-400 m-40 rounded-3xl'>
                        <div className='flex justify-around px-40 mt-10'>
                            <h1 className='font-extrabold text-5xl text-center'>Puntaje {puntaje}</h1>
                            <div>                                
                                <form
                                    onSubmit={e => {
                                    e.preventDefault();
                                    crearJugador({ variables: { nombre: nombre.value, puntaje: puntaje } })
                                    window.location.href = "/historial"
                                    }}
                                >
                                    <input
                                    ref={value => setNombre(value)} 
                                    id='nombre'
                                    />
                                    <button type="submit">Aceptar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }     
}

export default Juego
