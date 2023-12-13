import express from 'express';
import MusicStoreController from '../controllers/musicStoreController';

const router = express.Router();

router.get('/genres', MusicStoreController.getAllGenres);
router.get('/albums/genre/:genreName', MusicStoreController.getAlbumsByGenreName);
router.get('/albums/:id', MusicStoreController.getAlbumById);

export default router;