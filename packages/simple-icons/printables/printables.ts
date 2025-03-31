import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siPrintables],svg[si-printables]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Printables</svg:title>
    <svg:path
      d="M3.678 4.8 12 9.6v9.6l8.322-4.8V4.8L12 0ZM12 19.2l-8.322-4.8V24Z"
    ></svg:path>`,
})
export class SiPrintables {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
