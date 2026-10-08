import { test, expect, vi } from 'vitest';
import { fetchData } from './api';

vi.mock('./api');

test('maneja la carga de datos', async () => {
  fetchData.mockResolvedValue({ id: 1, name: 'Test' });

  const resultado = await fetchData();

  expect(resultado).toEqual({
    id: 1,
    name: 'Test',
  });
});