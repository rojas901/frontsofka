import { gql } from '@apollo/client';

const GET_JUGADORES = gql`
    query Jugadores {
        Jugadores {
            _id
            nombre
            fecha
            puntaje  
        }
    }
`;

export { GET_JUGADORES };