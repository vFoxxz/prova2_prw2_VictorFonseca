import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Header from './Header';

function Create() {

  const [dados, setDados] = useState({ nome: '', genero: '', ano: '' });

  const navigate = useNavigate();

  const enviarForm = (event) => {
    event.preventDefault();
    axios.post('https://6a11e0403e35d0f37ee3c9cf.mockapi.io/filmes', dados)
      .then(res => {
        console.log(res);
        navigate('/');
        alert("Filme registrado com sucesso!");
      })
      .catch(err => console.log(err));
  }

  return (
    <div class="bg-dark text-light min-vh-100" style={{ fontFamily: "Poppins, sans-serif" }}>

      <Header />

      <main className="container d-flex justify-content-center align-items-center">

        <div className="card bg-black border-secondary shadow-lg text-light" style={{ width: "32rem", marginTop: "30px" }}>

          <div className="card-body p-4">

            <h2 className="text-center fw-bold mb-4">
              Criar Filme
            </h2>

            <form onSubmit={enviarForm}>

              <div className="mb-4">
                <label className="form-label fw-semibold">
                  Nome
                </label>

                <input
                  type="text"
                  className="form-control bg-dark text-light border-secondary"
                  placeholder="Digite o nome do filme"
                  onChange={e => setDados({ ...dados, nome: e.target.value })}
                />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">
                  Gênero
                </label>

                <input
                  type="text"
                  className="form-control bg-dark text-light border-secondary"
                  placeholder="Digite o gênero"
                  onChange={e => setDados({ ...dados, genero: e.target.value })}
                />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">
                  Ano
                </label>

                <input
                  type="date"
                  className="form-control bg-dark text-light border-secondary"
                  onChange={e => setDados({ ...dados, ano: e.target.value })}
                />
              </div>

              <div className="d-flex gap-3">

                <Link type="button" to={'/'} className="btn btn-outline-secondary w-100">
                  Cancelar
                </Link>

                <button type="submit" className="btn btn-light w-100 fw-semibold">
                  Concluir
                </button>

                
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Create