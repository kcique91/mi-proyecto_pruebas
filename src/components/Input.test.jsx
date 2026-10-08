import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

test('previene inyección XSS', async () => {
  const user = userEvent.setup();

  render(<Input />);

  await user.type(
    screen.getByRole('textbox'),
    '<script>alert("XSS")</script>'
  );

  expect(screen.getByRole('textbox')).toHaveValue(
    '<script>alert("XSS")</script>'
  );

  expect(document.body.innerHTML).not.toContain(
    '<script>alert("XSS")</script>'
  );
});