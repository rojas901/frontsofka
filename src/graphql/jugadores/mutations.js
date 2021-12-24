import { gql } from '@apollo/client';

const CREAR_JUGADOR = gql`
    mutation CrearJugador($nombre: String!, $puntaje: Int!) {
        crearJugador(nombre: $nombre, puntaje: $puntaje) {
            _id
            fecha
            nombre
            puntaje
        }
    }
`;

export { CREAR_JUGADOR };