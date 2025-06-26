import { Schema, model } from 'mongoose';

const ddds = [11,12,13,14,15,16,17,18,19,21,22,24,27,28,31,32,33,34,35,37,38,
41,42,43,44,45,46,47,48,49,51,53,54,55,61,62,63,64,65,66,67,68,69,71,73,74,75,
77,79,81,82,83,84,85,86,87,88,89,91,92,93,94,95,96,97,98,99];

const PessoaSchema = new Schema({
  nome: {
    type: String,
    required: [true, 'O nome é obrigatório.']
  },
  idade: {
    type: Number,
    min: [14, 'A idade mínima é 14 anos.']
  },
  email: {
    type: String,
    required: [true, 'O e-mail é obrigatório.'],
    unique: true,
    validate: {
      validator: function (v: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) &&
          (/(@etec|@fatec|@cps)/.test(v) && v.endsWith('.sp.gov.br'));
      },
      message: 'E-mail inválido. Deve conter @etec, @fatec ou @cps e terminar com .sp.gov.br.'
    }
  },
  fone: {
    type: String,
    required: [true, 'O telefone é obrigatório.'],
    validate: {
      validator: function (v: string) {
        const valid = /^[0-9]{10,11}$/.test(v);
        const ddd = parseInt(v.substring(0, 2));
        return valid && ddds.includes(ddd);
      },
      message: 'Telefone inválido. Deve conter DDD válido e 10 a 11 dígitos.'
    }
  }
});

export const Pessoa = model('Pessoa', PessoaSchema);
