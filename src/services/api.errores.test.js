import { test, expect, vi } from 'vitest';
import axios from 'axios';
import { fetchDatos } from './api';

vi.mock('axios');

test('maneja errores de API correctamente', async () => {
  axios.get.mockRejectedValue(new Error('API Error'));

  await expect(fetchDatos()).rejects.toThrow('API Error');
});