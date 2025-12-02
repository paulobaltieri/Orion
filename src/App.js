import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home.jsx'
import Compeicao from './pages/Competicao/Competicao.jsx'
import Cursos from './pages/Cursos/Cursos.jsx'
import Seminario from './pages/Seminario/Seminario.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/competicao" element={<Compeicao/>}/>
        <Route path="/seminario" element={<Seminario/>}/>
        <Route path="/cursos" element={<Cursos/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
