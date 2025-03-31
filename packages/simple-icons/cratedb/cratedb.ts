import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siCratedb],svg[si-cratedb]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>CrateDB</svg:title>
    <svg:path d="M18 9V3h-6v6H0v6h6v6h6v-6h12V9h-6z"></svg:path>`,
})
export class SiCratedb {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
