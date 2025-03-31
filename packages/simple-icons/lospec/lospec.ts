import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siLospec],svg[si-lospec]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Lospec</svg:title>
    <svg:path
      d="M4.23 0v24h15.541v-8.4004h-7.1719v3.5996H11.402V0z"
    ></svg:path>`,
})
export class SiLospec {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
