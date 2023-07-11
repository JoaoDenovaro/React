import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { EventDetails } from '../pages/EventDetails'
import { Error404 } from '../pages/Error404'

export function App() {
  return (
    <BrowserRouter> {/* indica ao navegador as rotas existentes */}
      <Routes>{/* Envolve as rotas */}
        <Route path='/' element={ <Home/> } /> {/* Cria as rotas */}
        <Route path='/eventos/:id' element={ <EventDetails/> } />
        <Route path='*' element={ <Error404/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
