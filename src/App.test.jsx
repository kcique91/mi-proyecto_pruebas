import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('flujo de login completo', async () => {
  const user = userEvent.setup();

  render(<App />);

  await user.type(screen.getByLabelText('Usuario'), 'testuser');
  await user.type(screen.getByLabelText('Contraseña'), 'password');

  await user.click(screen.getByText('Iniciar sesión'));

  expect(await screen.findByText('Bienvenido')).toBeInTheDocument();
});