import axios from 'axios';
import React, { useState } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

function Update() {

  const [idFilme, setIdFilme] = useState('');
  const [dados, setDados] = useState({ nome: '', genero: '', ano: '' });
  const [forms, setForms] = useState(false)

  const api = 'https://6a11e0403e35d0f37ee3c9cf.mockapi.io/filmes/'

  const buscarFilme = (e) => {
    e.preventDefault();
    axios.get(api + idFilme)
      .then(res => {
        setDados({
          nome: res.data.nome,
          genero: res.data.genero,
          ano: res.data.ano
        })
        setForms(true)
      })
      .catch(err => {
        console.log(err);
        alert("Filme nao encontrado");
        setForms(false)
      });
  }

  const atualizarFilme = (e) => {
    e.preventDefault();
    axios.put(api + idFilme, dados)
      .then(() => {
        alert("Filme atualizado com sucesso!");
      })
      .catch(err => console.log(err));
  }

  return (

    <div className="bg-dark text-light min-vh-100" style={{ fontFamily: "Poppins, sans-serif" }}>
      <Header />
      <main className="container d-flex justify-content-center">
        <div className="card bg-black border-secondary shadow-lg text-light mt-5" style={{ width: "32rem" }}>
          <div className="card-body p-4">
            <h2 className="text-center fw-bold mb-4">
              Alterar Filme
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
                Buscar Filme
              </button>

            </form>

            {
              forms && (

                <div className="border-top border-secondary pt-4">
                  <h4 className="fw-bold mb-4 text-center">
                    Editar Informações
                  </h4>
                  
                  <form onSubmit={atualizarFilme}>
                    <div className="mb-4">
                      <label className="form-label fw-semibold">
                        Nome
                      </label>
                      <input
                        type="text"
                        className="form-control bg-dark text-light border-secondary"
                        value={dados.nome}
                        onChange={(e) =>
                          setDados({
                            ...dados,
                            nome: e.target.value
                          })
                        }
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-semibold">
                        Gênero
                      </label>
                      <input
                        type="text"
                        className="form-control bg-dark text-light border-secondary"
                        value={dados.genero}
                        onChange={(e) =>
                          setDados({
                            ...dados,
                            genero: e.target.value
                          })
                        }
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-semibold">
                        Ano
                      </label>
                      <input
                        type="date"
                        className="form-control bg-dark text-light border-secondary"
                        value={dados.ano}
                        onChange={(e) =>
                          setDados({
                            ...dados,
                            ano: e.target.value
                          })
                        }
                      />

                    </div>
                    <button type="submit" className="btn btn-light w-100 fw-semibold">
                      Salvar Alterações
                    </button>

                    <Link type="button" to={'/'} className="btn btn-outline-secondary w-100" style={{marginTop:"10px"}}>
                      Cancelar
                    </Link>
                  </form>

                </div>
              )
            }
          </div>
        </div>
      </main>
    </div>
  )
}

export default Update;