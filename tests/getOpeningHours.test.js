const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Retorna o horário de funcionamento da semana caso a função seja chamada sem parâmetros', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Caso o parâmetro passado não seja um dia da semana, deve retornar um erro com a mensagem: The day must be valid. Example: Monday', () => {
    expect(() => { getOpeningHours('Quarta', 10); }).toThrow('The day must be valid. Example: Monday');
  });
  it('Caso o parâmetro passado como hora ou minuto não seja um dígito, deve retornar um erro com a mensagem: The (hour/minutes) should represent a number', () => {
    expect(() => { getOpeningHours('Monday', 'ab:cd'); }).toThrow('The hour should represent a number');
    expect(() => { getOpeningHours('Monday', '08:cd'); }).toThrow('The minutes should represent a number');
  });
  it('Ao passar uma abreviação diferente de AM ou PM, deve retornar um erro com a frase: The abbreviation must be \'AM\' or \'PM\'', () => {
    expect(() => { getOpeningHours('Monday', '08:00-XX'); }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Ao passar uma hora ou minuto inexistente, deve retornar um erro com a mensagem: The hour/minutes must be between 0 and 12/59', () => {
    expect(() => { getOpeningHours('Monday', '99:00-AM'); }).toThrow('The hour must be between 0 and 12');
    expect(() => { getOpeningHours('Monday', '09:99-AM'); }).toThrow('The minutes must be between 0 and 59');
  });
  it('Ao passar um dia da semana como parâmetro, deve retornar uma mensagem dizendo se o zoológico estará aberto ou fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
    expect(getOpeningHours('Tuesday', '11:00-PM')).toEqual('The zoo is closed');
  });
});
