import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siPurism],svg[si-purism]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Purism</svg:title>
    <svg:path
      d="M24 19.588H0V4.412h24zM2.824 16.765h18.352v-9.53H2.824Z"
    ></svg:path>`,
})
export class SiPurism {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
