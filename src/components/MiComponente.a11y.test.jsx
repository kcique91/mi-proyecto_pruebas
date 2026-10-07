import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import MiComponente from './MiComponente';

expect.extend(toHaveNoViolations);

test('no tiene violaciones de accesibilidad', async () => {
  const { container } = render(<MiComponente />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
