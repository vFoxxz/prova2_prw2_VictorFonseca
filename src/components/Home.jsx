
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function Home() {

    const [info, setInfo] = useState([]);
    const [filmeSelecionado, setFilmeSelecionado] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('https://6a11e0403e35d0f37ee3c9cf.mockapi.io/filmes')
            .then(res => setInfo(res.data))
            .catch(err => console.log(err));
    }, []);


    return (
        <div class="bg-dark text-light min-vh-100" style={{ fontFamily: "Poppins, sans-serif" }}>

            <Header/>
            
            <main class="container py-5">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="card bg-black border-secondary shadow">
                            <div className="card-body p-3">
                                <table className="table table-dark table-hover align-middle mb-0">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Nome</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {info.map((d, i) => (
                                            <tr key={i} style={{ cursor: "pointer" }} onClick={() => navigate(`/ler/${d.id}`)}>
                                                <td>{d.id}</td>
                                                <td>{d.nome}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home