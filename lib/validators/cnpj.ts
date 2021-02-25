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

  private checkDigits(cnpjNumbers: Array<string>) {
    const reverse = cnpjNumbers.reverse();

    let index = 2;
    let sum = 0;

    reverse.forEach(number => {
      sum += Number(number) * index;
      if (index === 9) index = 1;
      index += 1;
    });

    return sum % 11 < 2 ? 0 : 11 - (sum % 11);
  }

  public isValid(cnpj: string): boolean {
    const cnpjToValidate = cnpj.replace(/[^\d]+/g, '');

    if (cnpjToValidate.length !== 14) return false;
    if (this.invalidCNPJs.includes(cnpjToValidate)) return false;

    let cnpjNumbers = cnpjToValidate.substring(0, 12);

    const cnpjWithoutCheckDigits = cnpjToValidate.substring(0, 12).split('');

    cnpjNumbers += this.checkDigits(cnpjWithoutCheckDigits);
    cnpjNumbers += this.checkDigits(cnpjNumbers.split(''));

    return cnpjNumbers === cnpjToValidate;
  }
}

const cnpjValidator = new CNPJValidator();

export { cnpjValidator };
