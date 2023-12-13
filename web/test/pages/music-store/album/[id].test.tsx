// FILEPATH: /c:/Repos/Insight-Services-APAC/copilot-lab-music-store-typescript-complete/web/test/pages/music-store/album/[id].test.tsx

import { render, screen } from '@testing-library/react';
import AlbumPage from '../../../../src/pages/music-store/album/[id]';
import { Album } from '../../../../src/models/album';

const mockAlbum: Album = {
    id: 1,
    title: "Mock Album",
    artistId: 1,
    genreId: 1,
    imageUrl: "https://example.com/mock-album.jpg",
    price: 9.99,
    artist: {
        id: 1,
        name: "Mock Artist",
        country: "Mock Country"
    },
    genre: {
        id: 1,
        name: "Mock Genre"
    }
};

describe('Album', () => {
  it('renders without crashing', () => {
    render(<AlbumPage album={mockAlbum} />);
    expect(screen.getByText(mockAlbum.title)).toBeInTheDocument();
  });

  it('displays album details', () => {
    render(<AlbumPage album={mockAlbum} />);
    expect(screen.getByText(`${mockAlbum.artist.name}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockAlbum.genre.name}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockAlbum.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`)).toBeInTheDocument();
  });

  it('links back to album list', () => {
    render(<AlbumPage album={mockAlbum} />);
    expect(screen.getByText('Back to Albums').closest('a')).toHaveAttribute('href', `/music-store/browse?genre=${mockAlbum.genre.name}`);
  });
});
