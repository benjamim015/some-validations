class CNPJValidator {
  private invalidCNPJs = [
    '00000000000000',
    '11111111111111',
    '22222222222222',
    '33333333333333',
    '44444444444444',
    '55555555555555',
    '66666666666666',
    '77777777777777',
    '88888888888888',
    '99999999999999',
  ];

  public isValid(cnpj: string): boolean {
    const cnpjToValidate = cnpj.replace(/[^\d]+/g, '');
    if (cnpjToValidate.length !== 14) return false;
    if (this.invalidCNPJs.includes(cnpj)) return false;
    return true;
  }
}

const cnpjValidator = new CNPJValidator();

export { cnpjValidator };
