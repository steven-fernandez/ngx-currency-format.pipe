# Angular Currency Format Pipe

This project provides a custom Angular pipe for formatting currency values. 
It leverages the built-in JavaScript `Intl.NumberFormat` object to format numbers as currency, offering flexibility in terms of different currency codes.

## Features

- Easy to use and integrate into any Angular project.
- Supports various currency codes (e.g., USD, EUR, GBP).
- Utilizes the robust `Intl.NumberFormat` for localization and formatting.

## Installation

1. Clone this repository or download the source code.
2. Include the `CurrencyFormatPipe` in your Angular standalone component.

    ```typescript
    import { CurrencyFormatPipe } from './path-to-pipe/currency-format.pipe';

    imports: [ CurrencyFormatPipe ],
    
    ```

## Usage

To use the `CurrencyFormatPipe`, simply apply it in your Angular component templates.

Example:

```html
<!-- Default to USD if no currency code is provided -->
<p>{{ 12345.67 | currencyFormat }}</p>

<!-- Specify a different currency code -->
<p>{{ 12345.67 | currencyFormat:'EUR' }}</p>
