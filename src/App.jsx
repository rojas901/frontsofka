import Index from './pages/Index';
import Juego from './pages/Juego';
import Historial from './pages/Historial';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql'
});

const client= new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Index />} />
          <Route path='/juego' element={<Juego />} />
          <Route path='/historial' element={<Historial />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
