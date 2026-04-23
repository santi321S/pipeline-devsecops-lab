const { sumar, saludo } = require('./app');
test('suma 2+3 = 5', () => { expect(sumar(2, 3)).toBe(5); });
test('saludo retorna Hola DevSecOps', () => { expect(saludo()).toBe("Hola DevSecOps"); });
