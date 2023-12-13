import { expect } from 'chai';
import MusicStoreService  from '../../src/services/musicStoreService';

describe('MusicService', () => {
  describe('getAllGenres', () => {
    it('should return all genres', () => {
      const genres = MusicStoreService.getAllGenres();
      expect(genres).to.be.an('array');
      // Add more assertions based on your specific implementation
    });
  });

  describe('getAlbumsByGenreName', () => {
    it('should return albums filtered by genre name', () => {
      const genreName = 'rock';
      const albums = MusicStoreService.getAlbumsByGenreName(genreName);
      expect(albums).to.be.an('array');
      // Add more assertions based on your specific implementation
    });
  });

  describe('getAlbumById', () => {
    it('should return an album by its id', () => {
      const albumId = 1;
      const album = MusicStoreService.getAlbumById(albumId);
      expect(album).to.be.an('object');
      // Add more assertions based on your specific implementation
    });

    it('should return undefined if album id is not found', () => {
      const albumId = 999;
      const album = MusicStoreService.getAlbumById(albumId);
      expect(album).to.be.undefined;
    });
  });
});