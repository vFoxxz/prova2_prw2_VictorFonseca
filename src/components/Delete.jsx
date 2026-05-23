import axios from 'axios';
import React, { useState } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

function Delete() {

  const [idFilme, setIdFilme] = useState('');
  const [filme, setFilme] = useState(null);
  const api = 'https://6a11e0403e35d0f37ee3c9cf.mockapi.io/filmes/'

  const buscarFilme = (e) => {
    e.preventDefault();

    axios.get(api + idFilme)
      .then(res => {
        setFilme(res.data);
      })
      .catch(err => {
        console.log(err);
        alert("Filme nao encontrado");
      });
  }

  const deletarFilme = () => {
    const confirmar = window.confirm(`Quer apagar o filme ${filme.nome}?`);
    if (confirmar) {
      axios.delete(api + idFilme)
        .then(() => {
          alert("Filme deletado com sucesso.");
          setIdFilme('');
          setFilme(null);
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <div
      className="bg-dark text-light min-vh-100" style={{ fontFamily: "Poppins, sans-serif" }}>

      <Header />

      <main className="container d-flex justify-content-center">
        <div className="card bg-black border-secondary shadow-lg text-light mt-5" style={{ width: "32rem" }}>
          <div className="card-body p-4">
            <h2 className="text-center fw-bold mb-4">
              Deletar Filme
            </h2>
            <form onSubmit={buscarFilme}>
              <div className="mb-4">
                <label className="form-label fw-semibold">
                  ID do Filme
                </label>
                <input
                  type="number"
                  className="form-control bg-dark text-light border-secondary"
                  placeholder="Digite o ID"
                  value={idFilme}
                  onChange={(e) => setIdFilme(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-light w-100 fw-semibold mb-4">
                Consultar
              </button>
            </form>
            {
              filme && (
                <div className="border-top border-secondary pt-4">
                  <h4 className="fw-bold mb-3 text-center">
                    Informações do Filme
                  </h4>
                  <div className="mb-3">
                    <span className="fw-bold text-secondary">
                      ID:
                    </span>

                    <p className="mb-0 fs-5">
                      {filme.id}
                    </p>
                  </div>
                  <hr className="border-secondary" />
                  <div className="mb-3">
                    <span className="fw-bold text-secondary">
                      Nome:
                    </span>

                    <p className="mb-0 fs-5">
                      {filme.nome}
                    </p>
                  </div>
                  <hr className="border-secondary" />
                  <div className="mb-3">
                    <span className="fw-bold text-secondary">
                      Gênero:
                    </span>

                    <p className="mb-0 fs-5">
                      {filme.genero}
                    </p>
                  </div>
                  <hr className="border-secondary" />
                  <div className="mb-4">
                    <span className="fw-bold text-secondary">
                      Ano:
                    </span>

                    <p className="mb-0 fs-5">
                      {filme.ano}
                    </p>
                  </div>
                  <button
                    className="btn btn-danger w-100 fw-semibold" onClick={deletarFilme}>
                    Deletar Filme
                  </button>
                  <Link type="button" to={'/'} className="btn btn-outline-secondary w-100" style={{marginTop:"10px"}}>
                  Cancelar
                  </Link>
                </div>
              )
            }
          </div>
        </div>
      </main>
    </div>
  )
}

export default Delete;