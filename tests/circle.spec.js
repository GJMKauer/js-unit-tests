const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
    expect(circle('0')).toBe(undefined);
    expect(typeof circle(3)).toBe('object');
    expect(Object.keys(circle(4))).toHaveLength(3);
    expect(circle()).toBe(undefined);
    expect(circle(2)).toEqual(expect.objectContaining({ circumference: 12.56 }));
    expect(circle(3).area).toBeCloseTo(28.26);
  });
});
