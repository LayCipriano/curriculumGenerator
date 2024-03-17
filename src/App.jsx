import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/DadosPessoais.jsx';
import Educacao from './pages/Educacao.jsx';
import ExpProfissionais from './pages/xProfissionais.jsx'
import Metas from './pages/MetasProfissionais.jsx';
import Habilidadeds from './pages/Habilidades.jsx';
import Download from './pages/Download.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/Educacao" element={<Educacao />} />
      <Route path='/xProfissionais' element={<ExpProfissionais/>} />
      <Route path="/MetasProfissionais" element={<Metas />} />
      <Route path="/Habilidades" element={<Habilidadeds />} />
      <Route path="/Download" element={<Download />} />
    </>
  )
)


function App(){
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )}

export default App;
