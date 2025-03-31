import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siZerodha],svg[si-zerodha]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Zerodha</svg:title>
    <svg:path
      d="M20.378 5.835A27.267 27.267 0 0124 12.169V0H13.666c2.486 1.343 4.763 3.308 6.712 5.835zM5.48 1.297c-1.914 0-3.755.409-5.48 1.166V24h22.944C22.766 11.44 15 1.297 5.48 1.297z"
    ></svg:path>`,
})
export class SiZerodha {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
