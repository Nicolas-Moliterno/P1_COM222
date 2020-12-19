import Aluno from './Aluno';
import Disciplina from './Disciplina';
export default class Turma{
    constructor(
        public codigo: number,
        public disciplinaTurma: Disciplina,
        public listaAlunos: Aluno[]
    ){}
}