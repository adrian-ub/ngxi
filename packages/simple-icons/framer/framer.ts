import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siFramer],svg[si-framer]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.fill]': 'fill()',
  },
  template: `<svg:title>Framer</svg:title>
    <svg:path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"></svg:path>`,
})
export class SiFramer {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly fill = input('currentColor');
}
