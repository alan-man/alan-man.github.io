import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Alan\'s portfolio and selected work', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Alan Tambellini/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Tree classification from aerial imagery/i })).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /GitHub/i })[0]).toHaveAttribute('href', 'https://github.com/alan-man');
  expect(screen.getByRole('link', { name: 'GitHub repository for Tree classification from aerial imagery' })).toHaveAttribute('href', 'https://github.com/ZahhS/trees_project_2026');
  expect(screen.getByRole('link', { name: 'Report PDF for BirdCLEF+ species classification' })).toHaveAttribute('href', '/reports/BirdClef.pdf');
  expect(screen.getByRole('link', { name: 'Report PDF for Sentiment & speech classification' })).toHaveAttribute('href', '/reports/Sentiment.pdf');
  expect(screen.getByRole('link', { name: 'Report PDF for Tree classification from aerial imagery' })).toHaveAttribute('href', '/reports/Tree_Report_2026_AT_ZS.pdf');
  expect(screen.getByRole('link', { name: 'GitHub repository for Semantic search benchmark' })).toHaveAttribute('href', 'https://github.com/alan-man/FlexNeuART-IR-TTP');
  expect(screen.getByRole('link', { name: 'Slides for Semantic search benchmark' })).toHaveAttribute('href', '/reports/Rapport%20de%20progression.pdf');
});
