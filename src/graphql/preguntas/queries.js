import { gql } from '@apollo/client';

const GET_PREGUNTAS = gql`
    query Preguntas {
        Preguntas {
            _id
            categoria
            correcto
            puntos
            texto
            opcion1
            opcion2
            opcion3
            opcion4  
        }
    }
`;

export { GET_PREGUNTAS };