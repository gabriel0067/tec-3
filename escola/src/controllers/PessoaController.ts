import { Request, Response } from 'express';
import { Pessoa } from '../models/Pessoa';

export const PessoaController = {
  async create(req: Request, res: Response) {
    try {
      const pessoa = await Pessoa.create(req.body);
      res.status(201).json(pessoa);
    } catch (err: any) {
      res.status(400).json({ erro: err.message });
    }
  },

  async list(req: Request, res: Response) {
    try {
      const pessoas = await Pessoa.find().sort({ nome: 1 });
      res.status(200).json(pessoas);
    } catch (err: any) {
      res.status(500).json({ erro: err.message });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await Pessoa.findByIdAndDelete(id);
      res.sendStatus(204);
    } catch (err: any) {
      res.status(400).json({ erro: err.message });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const pessoaAtualizada = await Pessoa.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json(pessoaAtualizada);
    } catch (err: any) {
      res.status(400).json({ erro: err.message });
    }
  }
};