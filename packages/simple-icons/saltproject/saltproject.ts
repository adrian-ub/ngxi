import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siSaltproject],svg[si-saltproject]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Salt Project</svg:title>
    <svg:path d="M0 12v10.56h12L18 12h6V1.44H12L6 12Z"></svg:path>`,
})
export class SiSaltproject {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
