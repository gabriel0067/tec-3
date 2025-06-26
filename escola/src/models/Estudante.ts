import { Schema, model, Types } from 'mongoose';
import { Pessoa } from './Pessoa';

const EstudanteSchema = new Schema({
  ra: {
    type: Number,
    required: [true, 'O RA é obrigatório.'],
    unique: true
  },
  media: {
    type: Number,
    min: [0, 'A média mínima é 0.'],
    max: [10, 'A média máxima é 10.']
  },
  pessoa: {
    type: Types.ObjectId,
    ref: 'Pessoa',
    required: [true, 'Pessoa é obrigatória.'],
    validate: {
      validator: async function (id: Types.ObjectId) {
        const exists = await Pessoa.findById(id);
        return !!exists;
      },
      message: 'Pessoa não encontrada no banco.'
    }
  }
});

export const Estudante = model('Estudante', EstudanteSchema);
