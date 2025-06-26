import { Schema, model } from 'mongoose';

const DisciplinaSchema = new Schema({
  descricao: {
    type: String,
    required: [true, 'Descrição é obrigatória.']
  },
  curso: {
    type: String,
    required: [true, 'Curso é obrigatório.']
  },
  semestre: {
    type: Number,
    min: [1, 'O semestre mínimo é 1.'],
    max: [10, 'O semestre máximo é 10.']
  }
});

export const Disciplina = model('Disciplina', DisciplinaSchema);