import { cnpjValidator } from '../../lib';

describe('CNPJValidator', () => {
  it('should returns false if an invalid value is provided', () => {
    expect(cnpjValidator.isValid('')).toBeFalsy();
    expect(cnpjValidator.isValid(null)).toBeFalsy();
    expect(cnpjValidator.isValid(undefined)).toBeFalsy();
  });

  it('should returns false if the length of CNPJ is different from 14', () => {
    expect(cnpjValidator.isValid('invalid_cnpj')).toBeFalsy();
  });

  it('should returns false if a known invalid CNPJ is provided', () => {
    expect(cnpjValidator.isValid('00000000000000')).toBeFalsy();
    expect(cnpjValidator.isValid('11111111111111')).toBeFalsy();
    expect(cnpjValidator.isValid('22222222222222')).toBeFalsy();
    expect(cnpjValidator.isValid('33333333333333')).toBeFalsy();
    expect(cnpjValidator.isValid('44444444444444')).toBeFalsy();
    expect(cnpjValidator.isValid('55555555555555')).toBeFalsy();
    expect(cnpjValidator.isValid('66666666666666')).toBeFalsy();
    expect(cnpjValidator.isValid('77777777777777')).toBeFalsy();
    expect(cnpjValidator.isValid('88888888888888')).toBeFalsy();
    expect(cnpjValidator.isValid('99999999999999')).toBeFalsy();
    expect(cnpjValidator.isValid('00.000.000/0000-00')).toBeFalsy();
    expect(cnpjValidator.isValid('11.111.111/1111-11')).toBeFalsy();
    expect(cnpjValidator.isValid('22.222.222/2222-22')).toBeFalsy();
    expect(cnpjValidator.isValid('33.333.333/3333-33')).toBeFalsy();
    expect(cnpjValidator.isValid('44.444.444/4444-44')).toBeFalsy();
    expect(cnpjValidator.isValid('55.555.555/5555-55')).toBeFalsy();
    expect(cnpjValidator.isValid('66.666.666/6666-66')).toBeFalsy();
    expect(cnpjValidator.isValid('77.777.777/7777-77')).toBeFalsy();
    expect(cnpjValidator.isValid('88.888.888/8888-88')).toBeFalsy();
    expect(cnpjValidator.isValid('99.999.999/9999-99')).toBeFalsy();
  });

  it('should returns false if an invalid CNPJ is provided', () => {
    expect(cnpjValidator.isValid('45068109000101')).toBeFalsy();
    expect(cnpjValidator.isValid('45.068.109/0001-01')).toBeFalsy();
  });

  it('should returns true if an valid CNPJ is provided', () => {
    expect(cnpjValidator.isValid('72753584251007')).toBeTruthy();
    expect(cnpjValidator.isValid('72.753.584/2510-07')).toBeTruthy();
  });

  it('should generate a valid CNPJ', () => {
    expect(cnpjValidator.isValid(cnpjValidator.generate())).toBeTruthy();
    expect(cnpjValidator.isValid(cnpjValidator.generate(true))).toBeTruthy();
  });
});
