import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siAccenture],svg[si-accenture]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Accenture</svg:title>
    <svg:path
      d="m.66 16.95 13.242-4.926L.66 6.852V0l22.68 9.132v5.682L.66 24Z"
    ></svg:path>`,
})
export class SiAccenture {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
