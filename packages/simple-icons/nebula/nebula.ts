import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siNebula],svg[si-nebula]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.fill]': 'fill()',
  },
  template: `<svg:title>Nebula</svg:title>
    <svg:path
      d="M7.417 9.307 0 14.693h9.167L12 23.413l2.833-8.72H24s-3.915-2.84-7.417-5.386l2.834-8.72L12 5.976C8.499 3.438 4.583.588 4.583.588z"
    ></svg:path>`,
})
export class SiNebula {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly fill = input('currentColor');
}
