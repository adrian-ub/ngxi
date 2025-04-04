import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siApmterminals],svg[si-apmterminals]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.fill]': 'fill()',
  },
  template: `<svg:title>APM Terminals</svg:title>
    <svg:path
      d="M23.8 2.95 0 16.55v4.5L24 9.32V2.95zm.2 10.1-8.87 4.21v3.68l8.87-3.4Z"
    ></svg:path>`,
})
export class SiApmterminals {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly fill = input('currentColor');
}
