import { cnpjValidator } from '../../lib';

describe('CNPJValidator', () => {
  it('should returns false if the length of cnpj is different from 14', () => {
    expect(cnpjValidator.isValid('invalid_cnpj')).toBe(false);
  });
});
