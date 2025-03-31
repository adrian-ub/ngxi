import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siTelegraph],svg[si-telegraph]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Telegraph</svg:title>
    <svg:path d="M0 0v24h24V0H0zm6 6h12v3h-4.5v9h-3V9H6V6Z"></svg:path>`,
})
export class SiTelegraph {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
