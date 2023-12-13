// Mock data for the music store
// Includes a list of genres, artists, and albums

import { Album } from "../models/album";
import { Artist } from "../models/artist";
import { Genre } from "../models/genre";

// The data should be real genres, artists, and albums examples are artists like Pink Floyd, The Beatles, and Led Zeppelin
export const genres: Genre[] = [
    { id: 1, name: 'Rock' },
    { id: 2, name: 'Jazz' },
    { id: 3, name: 'Metal' },
    { id: 4, name: 'Alternative' },
    { id: 5, name: 'Disco' },
    { id: 6, name: 'Blues' },
    { id: 7, name: 'Latin' },
    { id: 8, name: 'Reggae' },
    { id: 9, name: 'Pop' },
    { id: 10, name: 'Classical' },
];

export const artists: Artist[] = [
    { id: 1, name: 'AC/DC', country: 'Australia' },
    { id: 2, name: 'Accept', country: 'Germany' },
    { id: 3, name: 'Aerosmith', country: 'USA' },
    { id: 4, name: 'Alanis Morissette', country: 'Canada' },
    { id: 5, name: 'Alice In Chains', country: 'USA' },
    { id: 6, name: 'Antônio Carlos Jobim', country: 'Brazil' },
    { id: 7, name: 'Apocalyptica', country: 'Finland' },
    { id: 8, name: 'Audioslave', country: 'USA' },
    { id: 9, name: 'BackBeat', country: 'UK' },
    { id: 10, name: 'Billy Cobham', country: 'USA' },
    { id: 11, name: 'Black Label Society', country: 'USA' },
    { id: 12, name: 'Black Sabbath', country: 'UK' },
    { id: 13, name: 'Body Count', country: 'USA' },
    { id: 14, name: 'Bruce Dickinson', country: 'UK' },
    { id: 15, name: 'Buddy Guy', country: 'USA' },
    { id: 16, name: 'Caetano Veloso', country: 'Brazil' },
    { id: 17, name: 'Chico Buarque', country: 'Brazil' },
    { id: 18, name: 'Chico Science & Nação Zumbi', country: 'Brazil' },
    { id: 19, name: 'Cidade Negra', country: 'Brazil' },
    { id: 20, name: 'Cláudio Zoli', country: 'Brazil' },
    { id: 21, name: 'Various Artists', country: 'Brazil' },
    { id: 22, name: 'Led Zeppelin', country: 'UK' },
    { id: 23, name: 'Frank Zappa & Captain Beefheart', country: 'USA' },
    { id: 24, name: 'Marcos Valle', country: 'Brazil' }
];

export const albums: Album[] = [
    {
        id: 1,
        title: 'For Those About To Rock We Salute You',
        artistId: 1,
        genreId: 1,
        imageUrl: 'https://via.placeholder.com/150',
        price: 8.99,
        artist: artists[0],
        genre: genres[0]
    },
    {
        id: 2,
        title: 'Balls to the Wall',
        artistId: 2,
        genreId: 1,
        imageUrl: 'https://via.placeholder.com/150',
        price: 8.99,
        artist: artists[1],
        genre: genres[0]
    },
    {
        id: 3,
        title: 'Restless and Wild',
        artistId: 2,
        genreId: 1,
        imageUrl: 'https://via.placeholder.com/150',
        price: 8.99,
        artist: artists[1],
        genre: genres[0]
    },
    {
        id: 4,
        title: 'Let There Be Rock',
        artistId: 1,
        genreId: 1,
        imageUrl: 'https://via.placeholder.com/150',
        price: 8.99,
        artist: artists[0],
        genre: genres[0]
    },
    {
        id: 5,
        title: 'Big Ones',
        artistId: 3,
        genreId: 1,
        imageUrl: 'https://via.placeholder.com/150',
        price: 8.99,
        artist: artists[2],
        genre: genres[0]
    },
    {
        id: 6,
        title: 'Jagged Little Pill',
        artistId: 4,
        genreId: 2,
        imageUrl: 'https://via.placeholder.com/150',
        price: 8.99,
        artist: artists[3],
        genre: genres[1]
    },
    {
        id: 7,
        title: 'Facelift',
        artistId: 5,
        genreId: 1,
        imageUrl: 'https://via.placeholder.com/150',
        price: 8.99,
        artist: artists[4],
        genre: genres[0]
    },
    {
        id: 8,
        title: 'Warner 25 Anos',
        artistId: 6,
        genreId: 1,
        imageUrl: 'https://via.placeholder.com/150',
        price: 8.99,
        artist: artists[5],
        genre: genres[0]
    },
    {
        id: 9,
        title: 'Plays Metallica By Four Cellos',
        artistId: 7,
        genreId: 3,
        imageUrl: 'https://via.placeholder.com/150',
        price: 8.99,
        artist: artists[6],
        genre: genres[2]
    },
    {
        id: 10,
        title: 'Audioslave',
        artistId: 8,
        genreId: 1,
        imageUrl: 'https://via.placeholder.com/150',
        price: 8.99,
        artist: artists[7],
        genre: genres[0]
    },
    {
        id: 11,
        title: 'Out Of Exile',
        artistId: 8,
        genreId: 1,
        imageUrl: 'https://via.placeholder.com/150',
        price: 8.99,
        artist: artists[7],
        genre: genres[0]
    },
    {
        id: 12,
        title: 'BackBeat Soundtrack',
        artistId: 9,
        genreId: 1,
        imageUrl: 'https://via.placeholder.com/150',
        price: 8.99,
        artist: artists[8],
        genre: genres[0]
    },
    {
        id: 13,
        title: 'The Best Of Billy Cobham',
        artistId: 10,
        genreId: 1,
        imageUrl: 'https://via.placeholder.com/150',
        price: 8.99,
        artist: artists[9],
        genre: genres[0]
    }
];
