
import { Pipe, PipeTransform } from '@angular/core';

// The @Pipe decorator defines the name of the pipe, which will be used in the templates.
@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  /**
   * Transforms a numeric value into a formatted currency string.
   * 
   * @param value The numeric value to be formatted.
   * @param currencyCode The currency code (e.g., 'USD', 'EUR'). Defaults to 'USD'.
   * @returns The formatted currency string.
   */
  transform(value: number, currencyCode: string = 'USD'): string {
    // Check if the value is null or undefined and return an empty string if so.
    // This is a basic form of error handling.
    if (!value && value !== 0) {
      return '';
    }

    // Use the Intl.NumberFormat object to format the value as currency.
    // This API provides locale-aware formatting and is highly customizable.
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
    }).format(value);
  }
}
