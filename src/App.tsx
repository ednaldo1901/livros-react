import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

const App = () => {
  return (
    <Router>
      <nav className="ml-4 navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Catálogo
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/dados">
                Novo
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<LivroLista />} />
          <Route path="/dados" element={<LivroDados />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
