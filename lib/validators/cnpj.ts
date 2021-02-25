class CNPJValidator {
  public isValid(cnpj: string): boolean {
    const cnpjToValidate = cnpj.replace(/[^\d]+/g, '');
    if (cnpjToValidate.length !== 14) return false;
    return true;
  }
}

const cnpjValidator = new CNPJValidator();

export { cnpjValidator };
