import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './index';
import httpService from '@/services/httpService';

jest.mock('@/services/httpService');

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { name: 'Absence Manager' });
    expect(heading).toBeInTheDocument();
  });

  it('renders a loader', () => {
    render(<Home />);
    const progressbar = screen.getByRole('progressbar', { name: '' });
    expect(progressbar).toBeInTheDocument();
  });

  it('renders a nav section', () => {
    render(<Home />);
    const nav = screen.getByRole('navigation', { name: '' });
    expect(nav).toBeInTheDocument();
  });

  it('renders a main section', () => {
    render(<Home />);
    const main = screen.getByRole('main', { name: '' });
    expect(main).toBeInTheDocument();
  });
});
