import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siInoreader],svg[si-inoreader]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.fill]': 'fill()',
  },
  template: `<svg:title>Inoreader</svg:title>
    <svg:path
      d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0m3.6 4.8a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2"
    ></svg:path>`,
})
export class SiInoreader {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly fill = input('currentColor');
}
