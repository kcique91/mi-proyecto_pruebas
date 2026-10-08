import { test } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

function medirRendimiento(componente) {
  const inicio = performance.now();
  render(componente);
  const fin = performance.now();
  console.log(`Tiempo de renderizado: ${fin - inicio} ms`);
}

test('mide el rendimiento de App', () => {
  medirRendimiento(<App />);
});