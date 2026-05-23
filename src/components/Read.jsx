import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from './Header';


function Read() {

  const [info, setInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://6a11e0403e35d0f37ee3c9cf.mockapi.io/filmes/${id}`)
      .then(res => setInfo(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div class="bg-dark text-light min-vh-100" style={{ fontFamily: "Poppins, sans-serif" }}>

      <Header />

      <main className="container d-flex justify-content-center align-items-center">

        <div className="card bg-black border-secondary shadow-lg text-light" style={{ width: "30rem", marginTop: "30px" }}>

          <div className="card-body p-4">

            <h2 className="text-center fw-bold mb-4">
              Listagem do filme
            </h2>

            <div className="mb-3">
              <p className="fw">
                <strong>ID:</strong> {info.id}
              </p>
            </div>

            <hr className="border-secondary" />

            <div className="mb-3">
              <p className="fw">
                <strong>Nome:</strong> {info.nome}
              </p>
            </div>

            <hr className="border-secondary" />

            <div className="mb-3">
              <p className="fw">
                <strong>Ano:</strong> {info.ano && new Date(info.ano).toLocaleDateString('pt-BR')}
              </p>

            </div>
            <hr className="border-secondary" />

            <div className="mb-4">
              <p className="fw">
                <strong>Gênero:</strong> {info.genero}
              </p>
            </div>

            <div className="d-grid">
              <Link className="btn btn-outline-light" to={'/'}>
                Voltar
              </Link>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  )
}

export default Read