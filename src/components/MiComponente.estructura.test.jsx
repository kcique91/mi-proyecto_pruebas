import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MiComponente from './MiComponente';

test('renderiza el componente correctamente', () => {
  render(<MiComponente />);
  expect(screen.getByText('Texto esperado')).toBeInTheDocument();
});