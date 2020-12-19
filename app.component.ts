import { Component, OnInit } from '@angular/core';
import Aluno from './models/Aluno';
import Disciplina from './models/Disciplina';
import Turma from './models/Turma';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  codigoTurma: string;
  disciplinaSelecionada: any;
  alunoSelecionado: any;
  alunosSelecionados = [];
  contador = 0;
  buscarTurmaPorCodigo;
  exibirDisciplina;
  exibirAlunos;

  disciplina1 = new Disciplina(1, 'Matéria 1');
  disciplina2 = new Disciplina(2, 'Matéria 2');
  disciplina3 = new Disciplina(3, 'Matéria 3');
  disciplina4 = new Disciplina(4, 'Matéria 4');
  disciplina5 = new Disciplina(5, 'Matéria 5');

  aluno1 = new Aluno(1, 'Nome 1');
  aluno2 = new Aluno(2, 'Nome 2');
  aluno3 = new Aluno(3, 'Nome 3');
  aluno4 = new Aluno(4, 'Nome 4');
  aluno5 = new Aluno(5, 'Nome 5');
  aluno6 = new Aluno(6, 'Nome 6');
  aluno7 = new Aluno(7, 'Nome 7');
  aluno8 = new Aluno(8, 'Nome 8');

  listAlunos = [
    this.aluno1,
    this.aluno2,
    this.aluno3,
    this.aluno4,
    this.aluno5,
    this.aluno6,
    this.aluno7,
    this.aluno8,
  ];

  listDisciplinas = [
    this.disciplina1,
    this.disciplina2,
    this.disciplina3,
    this.disciplina4,
    this.disciplina5,
  ];

  turma1 = new Turma(0, this.disciplina1, this.listAlunos);
  turmas = [this.turma1];

  
  constructor() {}

  ngOnInit() {}

  onSelectDisciplina(disciplina) {
    
    this.disciplinaSelecionada = disciplina;
  }

  matricular() {
    if (
      !this.disciplinaSelecionada ||
      !this.codigoTurma ||
      this.alunosSelecionados.length == 0
    ) {
      alert('Confir os campos!');
      return;
    }
    this.contador += 1;
    this.turmas.push(
      new Turma(
        parseInt(this.codigoTurma),
        this.disciplinaSelecionada,
        this.alunosSelecionados
      )
    );

    alert('Turma cadastrada!');

    
  }

  checkAlunos(e) {
    this.alunosSelecionados.push(e);
    
  }

  onKey(event: any) {
    

    this.codigoTurma = event.target.value;
    
  }

  buscarTurma(e) {
    this.turmas.map((i) => {
      if (e.target.value == i.codigo) {
        
        this.buscarTurmaPorCodigo = i;
      }
    });
  }

  exibirTurma() {
    
    this.exibirDisciplina = this.buscarTurmaPorCodigo.discipTurma;
    this.exibirAlunos = this.buscarTurmaPorCodigo.listaAlunos;
    
  }
}
