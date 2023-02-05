import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Home from '../pages/index';

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
