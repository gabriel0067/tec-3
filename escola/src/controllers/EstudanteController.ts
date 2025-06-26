import { Request, Response } from 'express';
import { Estudante } from '../models/Estudante';

export const EstudanteController = {
  async create(req: Request, res: Response) {
    try {
      const estudante = await Estudante.create(req.body);
      res.status(201).json(estudante);
    } catch (err: any) {
      res.status(400).json({ erro: err.message });
    }
  },

  async list(req: Request, res: Response) {
    try {
      const estudantes = await Estudante.find().populate('pessoa');
      res.status(200).json(estudantes);
    } catch (err: any) {
      res.status(500).json({ erro: err.message });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await Estudante.findByIdAndDelete(id);
      res.sendStatus(204);
    } catch (err: any) {
      res.status(400).json({ erro: err.message });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const estudanteAtualizado = await Estudante.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json(estudanteAtualizado);
    } catch (err: any) {
      res.status(400).json({ erro: err.message });
    }
  }
};