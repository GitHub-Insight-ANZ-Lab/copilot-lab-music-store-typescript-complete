
import { albums, genres } from '../data/musicStoreMockData';
import { Album } from '../models/album';
import { Genre } from '../models/genre';

class MusicService {
  getAllGenres(): Genre[] {
    return genres;
  }

  getAlbumsByGenreName(genreName: string): Album[] {
    // Filter the albums by genre name case insensitive
    return albums.filter(album => album.genre.name.toLowerCase() === genreName.toLowerCase());
  }

  getAlbumById(id: number): Album | undefined {
    return albums.find(album => album.id === id);
  }
}

export default new MusicService();