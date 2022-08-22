const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna undefined quando a função é chamada sem parâmetro', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Retorna a frase: Parâmetro inválido, é necessário uma string, qunado o parâmetro passado não é uma string', () => {
    expect(handlerElephants(6)).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Ao passar como parâmetro uma chave existente no objeto elephants, retorna o valor dessa chave', () => {
    expect(handlerElephants('location')).toEqual('NW');
    expect(handlerElephants('popularity')).toEqual(5);
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Ao passar como parâmetro count, names ou averageAve, retorna, respectivamente, a quantidade de elefantes, seus nomes ou a média das idades', () => {
    expect(handlerElephants('count')).toEqual(4);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Ao passar como parâmetro uma busca inexistente, retorna null', () => {
    expect(handlerElephants('Busca errada')).toBeNull();
  });
});
