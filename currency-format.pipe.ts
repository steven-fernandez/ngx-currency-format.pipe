import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  /**
   * Transforms a numeric value into a formatted currency string.
   * 
   * @param value The numeric value to be formatted.
   * @param currencyCode The currency code (e.g., 'USD', 'EUR', 'GBP'). Defaults to 'GBP'.
   * @returns The formatted currency string.
   */
  transform(value: number, currencyCode: string = 'GBP'): string {
    if (!value && value !== 0) {
      return '';
    }

    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: currencyCode,
    }).format(value);
  }
}
