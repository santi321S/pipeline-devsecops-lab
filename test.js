const { sumar, saludo } = require('./app');
test('suma 2+3 = 5', () => { expect(sumar(2, 3)).toBe(5); });
test('saludo retorna Hola DevOps', () => { expect(saludo()).toBe("Hola DevOps"); });
