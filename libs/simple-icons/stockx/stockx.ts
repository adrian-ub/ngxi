import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siStockx],svg[si-stockx]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>StockX</svg:title>
    <svg:path
      d="M13.74 16.5 22.5 24v-6l-7-6 7-6V0L10.26 10.5v-3L1.5 0v6l7 6-7 6v6l12.24-10.5Z"
    />`,
})
export class SiStockx {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
