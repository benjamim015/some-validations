import { cnpjValidator } from '../../lib';

describe('CNPJValidator', () => {
  it('should returns false if an invalid value is provided', () => {
    expect(cnpjValidator.isValid('')).toBeFalsy();
    expect(cnpjValidator.isValid(null)).toBeFalsy();
    expect(cnpjValidator.isValid(undefined)).toBeFalsy();
  });

  it('should returns false if the length of CNPJ is different from 14', () => {
    expect(cnpjValidator.isValid('invalid_cnpj')).toBe(false);
  });

  it('should returns false if a known invalid CNPJ is provided', () => {
    expect(cnpjValidator.isValid('00000000000000')).toBe(false);
    expect(cnpjValidator.isValid('11111111111111')).toBe(false);
    expect(cnpjValidator.isValid('22222222222222')).toBe(false);
    expect(cnpjValidator.isValid('33333333333333')).toBe(false);
    expect(cnpjValidator.isValid('44444444444444')).toBe(false);
    expect(cnpjValidator.isValid('55555555555555')).toBe(false);
    expect(cnpjValidator.isValid('66666666666666')).toBe(false);
    expect(cnpjValidator.isValid('77777777777777')).toBe(false);
    expect(cnpjValidator.isValid('88888888888888')).toBe(false);
    expect(cnpjValidator.isValid('99999999999999')).toBe(false);
    expect(cnpjValidator.isValid('00.000.000/0000-00')).toBe(false);
    expect(cnpjValidator.isValid('11.111.111/1111-11')).toBe(false);
    expect(cnpjValidator.isValid('22.222.222/2222-22')).toBe(false);
    expect(cnpjValidator.isValid('33.333.333/3333-33')).toBe(false);
    expect(cnpjValidator.isValid('44.444.444/4444-44')).toBe(false);
    expect(cnpjValidator.isValid('55.555.555/5555-55')).toBe(false);
    expect(cnpjValidator.isValid('66.666.666/6666-66')).toBe(false);
    expect(cnpjValidator.isValid('77.777.777/7777-77')).toBe(false);
    expect(cnpjValidator.isValid('88.888.888/8888-88')).toBe(false);
    expect(cnpjValidator.isValid('99.999.999/9999-99')).toBe(false);
  });

  it('should returns false if an invalid CNPJ is provided', () => {
    expect(cnpjValidator.isValid('45068109000101')).toBe(false);
    expect(cnpjValidator.isValid('45.068.109/0001-01')).toBe(false);
  });

  it('should returns true if an valid CNPJ is provided', () => {
    expect(cnpjValidator.isValid('72753584251007')).toBe(true);
    expect(cnpjValidator.isValid('72.753.584/2510-07')).toBe(true);
  });

  it('should generate a valid CNPJ', () => {
    expect(cnpjValidator.isValid(cnpjValidator.generate())).toBe(true);
    expect(cnpjValidator.isValid(cnpjValidator.generate(true))).toBe(true);
  });
});
