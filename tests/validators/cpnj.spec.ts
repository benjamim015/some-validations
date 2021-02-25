import { cnpjValidator } from '../../lib';

describe('CNPJValidator', () => {
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
  });
});
