import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="border-bottom border-secondary bg-black shadow-sm">
            <div className="container py-4 text-center">

                <h1 className="fw-bold mb-4">
                    CATÁLOGO DE FILMES
                </h1>

                <nav>
                    <ul className="nav justify-content-center gap-3">

                        <li className="nav-item">
                            <Link className="nav-link active text-light" to={'/'}>
                                <i className="bi bi-house-fill"></i>
                                Início
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-light" to={'/criar'}>
                                <i className="bi bi-plus-circle-fill"></i>
                                Criar
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-light" to={'/editar'}>
                                <i className="bi bi-pencil-square"></i>
                                Alterar
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-light" to={'/apagar'}>
                                <i className="bi bi-trash-fill"></i>
                                Apagar
                            </Link>
                        </li>

                    </ul>
                </nav>

            </div>
        </header>
    )
}

export default Header;