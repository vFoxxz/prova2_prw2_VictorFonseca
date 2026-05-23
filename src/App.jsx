import './App.css';
import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update';
import Read from './components/Read';
import Delete from './components/Delete'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/criar' element={<Create />} />
                <Route path='/apagar' element={<Delete />} />
                <Route path='/editar/' element={<Update />} />
                <Route path='/ler/:id' element={<Read />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App