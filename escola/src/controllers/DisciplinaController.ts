import { Request, Response } from 'express';
import { Disciplina } from '../models/Disciplina';

export const DisciplinaController = {
  async create(req: Request, res: Response) {
    try {
      const disciplina = await Disciplina.create(req.body);
      res.status(201).json(disciplina);
    } catch (err: any) {
      res.status(400).json({ erro: err.message });
    }
  },

  async list(req: Request, res: Response) {
    try {
      const disciplinas = await Disciplina.find().sort({ descricao: 1 });
      res.status(200).json(disciplinas);
    } catch (err: any) {
      res.status(500).json({ erro: err.message });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await Disciplina.findByIdAndDelete(id);
      res.sendStatus(204);
    } catch (err: any) {
      res.status(400).json({ erro: err.message });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const disciplinaAtualizada = await Disciplina.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json(disciplinaAtualizada);
    } catch (err: any) {
      res.status(400).json({ erro: err.message });
    }
  }
};
