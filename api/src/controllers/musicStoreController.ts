import { Request, Response } from 'express';
import MusicService from '../services/musicStoreService';

/**
 * @swagger
 * tags:
 *   name: Music Store
 *   description: API endpoints for managing music store data
 */

class MusicStoreController {
  /**
   * @swagger
   * /genres:
   *   get:
   *     summary: Get all genres
   *     tags: [Music Store]
   *     responses:
   *       200:
   *         description: OK
   */
  async getAllGenres(req: Request, res: Response): Promise<void> {
    const genres = MusicService.getAllGenres();
    res.json(genres);
  }

  /**
   * @swagger
   * /albums/genre/{genreName}:
   *   get:
   *     summary: Get albums by genre name
   *     tags: [Music Store]
   *     parameters:
   *       - in: path
   *         name: genreName
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: OK
   */
  async getAlbumsByGenreName(req: Request, res: Response): Promise<void> {
    const albums = MusicService.getAlbumsByGenreName(req.params.genreName);
    res.json(albums);
  }

  /**
   * @swagger
   * /albums/{id}:
   *   get:
   *     summary: Get album by ID
   *     tags: [Music Store]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: OK
   *       404:
   *         description: Album not found
   */
  async getAlbumById(req: Request, res: Response): Promise<void> {
    // Get the album by integer id
    const album = MusicService.getAlbumById(parseInt(req.params.id));
    if (!album) {
      res.status(404).send('Album not found');
    } else {
      res.json(album);
    }
  }
}

export default new MusicStoreController();