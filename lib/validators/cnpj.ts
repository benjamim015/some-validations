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

  /**
   * Returns **true** if a valid CNPJ is provided and **false** if it is not valid
   * @param cnpj The CNPJ to validate
   */
  public isValid(cnpj: string): boolean {
    if (!cnpj) return false;

    const cnpjToValidate = cnpj.replace(/[^\d]+/g, '');

    if (cnpjToValidate.length !== 14) return false;
    if (this.invalidCNPJs.includes(cnpjToValidate)) return false;

    let cnpjNumbers = cnpjToValidate.substring(0, 12);

    const cnpjWithoutCheckDigits = cnpjToValidate.substring(0, 12).split('');

    cnpjNumbers += this.checkDigits(cnpjWithoutCheckDigits);
    cnpjNumbers += this.checkDigits(cnpjNumbers.split(''));

    return cnpjNumbers === cnpjToValidate;
  }

  /**
   * Generate a valid CNPJ
   * @param formatted If true the CNPJ will be formatted (XX.XXX.XXX/XXXX-XX)
   */
  public generate(formatted?: boolean): string {
    let cnpjNumbers = '';

    for (let i = 0; i < 12; i += 1) {
      cnpjNumbers += Math.floor(Math.random() * 9);
    }

    cnpjNumbers += this.checkDigits(cnpjNumbers.split(''));
    cnpjNumbers += this.checkDigits(cnpjNumbers.split(''));

    return formatted
      ? cnpjNumbers.replace(
          /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
          '$1.$2.$3/$4-$5',
        )
      : cnpjNumbers;
  }
}

const cnpjValidator = new CNPJValidator();

export { cnpjValidator };
