import { render, screen } from '@testing-library/react';
import BrowsePage from '../../../src/pages/music-store/browse';
import { Album } from '../../../src/models/album';

const mockAlbums: Album[] = [
    {
        id: 1,
        title: "Album 1",
        artistId: 1,
        genreId: 1,
        imageUrl: "https://example.com/album1.jpg",
        price: 9.99,
        artist: {
            id: 1,
            name: "Artist 1",
            country: "Country 1",
        },
        genre: {
            id: 1,
            name: "Genre 1",
        },
    },
    {
        id: 2,
        title: "Album 2",
        artistId: 2,
        genreId: 2,
        imageUrl: "https://example.com/album2.jpg",
        price: 12.99,
        artist: {
            id: 2,
            name: "Artist 2",
            country: "Country 2",
        },
        genre: {
            id: 2,
            name: "Genre 2",
        },
    }
];


describe('Browse', () => {
    it('renders without crashing', () => {
        render(<BrowsePage albums={mockAlbums} />);
        expect(screen.getByText('Back to Landing Page')).toBeInTheDocument();
    });

    it('displays albums', () => {
        render(<BrowsePage albums={mockAlbums} />);
        mockAlbums.forEach((album) => {
            expect(screen.getByText(album.title)).toBeInTheDocument();
        });
    });

    it('links back to landing page', () => {
        render(<BrowsePage albums={mockAlbums} />);
        expect(screen.getByText('Back to Landing Page').closest('a')).toHaveAttribute('href', '/music-store');
    });
});
