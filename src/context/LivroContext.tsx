// src/context/LivroContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Livro } from '../modelo/Livro';
import { ControleLivros } from '../controle/ControleLivros';

interface LivroContextType {
    livros: Livro[];
    incluirLivro: (livro: Livro) => void;
    excluirLivro: (codigo: number) => void;
}

const LivroContext = createContext<LivroContextType | undefined>(undefined);

export const LivroProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const controleLivro = new ControleLivros();
    const [livros, setLivros] = useState<Livro[]>(controleLivro.obterLivros());

    const incluirLivro = (livro: Livro) => {
        controleLivro.incluir(livro);
        setLivros(controleLivro.obterLivros());
    };

    const excluirLivro = (codigo: number) => {
        controleLivro.excluir(codigo);
        setLivros(controleLivro.obterLivros());
    };

    return (
        <LivroContext.Provider value={{ livros, incluirLivro, excluirLivro }}>
            {children}
        </LivroContext.Provider>
    );
};

export const useLivroContext = () => {
    const context = useContext(LivroContext);
    if (!context) {
        throw new Error('useLivroContext must be used within a LivroProvider');
    }
    return context;
};
