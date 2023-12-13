import { Artist } from "./artist";
import { Genre } from "./genre";

export interface Album {
  id: number;
  title: string;
  artistId: number;
  genreId: number;
  imageUrl: string;
  price: number;
  artist: Artist;
  genre: Genre;
}
