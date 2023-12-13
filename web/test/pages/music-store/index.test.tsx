import { render, screen } from '@testing-library/react';
import MusicStorePage from '../../../src/pages/music-store/index';
import { Genre } from '../../../src/models/genre';

describe('MusicStore', () => {
    const mockGenres: Genre[] = [
        { id: 1, name: 'Rock' },
        { id: 2, name: 'Pop' },
        { id: 3, name: 'Jazz' },
    ];
  
    it('renders without crashing', () => {
      render(<MusicStorePage genres={mockGenres} />);
      expect(screen.getByText('Music Store')).toBeInTheDocument();
    });
  
    it('displays genres', () => {
      render(<MusicStorePage genres={mockGenres} />);
      mockGenres.forEach((genre) => {
        expect(screen.getByText(genre.name)).toBeInTheDocument();
      });
    });
  
    it('links to correct genre', () => {
      render(<MusicStorePage genres={mockGenres} />);
      mockGenres.forEach((genre) => {
        expect(screen.getByText(genre.name).closest('a')).toHaveAttribute('href', `/music-store/browse?genre=${genre.name}`);
      });
    });
  });