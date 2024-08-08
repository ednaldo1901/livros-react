import { Livro } from '../modelo/Livro';

const livros: Livro[] = [
    new Livro(1, 1, 'Use a Cabeça: Java', 'Uma introdução ao Java.', ['Autor A', 'Autor B']),
    new Livro(2, 2, 'Java para Iniciantes', 'Aprenda Java desde o básico.', ['Autor C']),
    new Livro(3, 3, 'Java Avançado', 'Técnicas avançadas em Java.', ['Autor D'])
];

export class ControleLivros {
    obterLivros(): Livro[] {
        return livros;
    }

    incluir(livro: Livro): void {
        livro.codigo = livros.length ? Math.max(...livros.map(l => l.codigo)) + 1 : 1;
        livros.push(livro);
    }

    excluir(codigo: number): void {
        const index = livros.findIndex(l => l.codigo === codigo);
        if (index !== -1) {
            livros.splice(index, 1);
        }
    }
}
