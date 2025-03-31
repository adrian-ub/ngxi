import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siRiseup],svg[si-riseup]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Riseup</svg:title>
    <svg:path
      d="M10.5 24l-1.485-9.007-8.961-1.738L8.16 9.06 7.045 0l6.495 6.414 8.271-3.861-4.093 8.16 6.228 6.673-9.024-1.372z"
    />`,
})
export class SiRiseup {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
