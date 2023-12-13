import { Request, Response } from 'express';

export const getAllUsers = (req: Request, res: Response) => {
    res.send('GET request to the homepage');
};

export const createUser = (req: Request, res: Response) => {
    res.send('POST request to the homepage');
};