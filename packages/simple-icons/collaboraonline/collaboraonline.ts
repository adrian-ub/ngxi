import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siCollaboraonline],svg[si-collaboraonline]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Collabora Online</svg:title>
    <svg:path
      d="M8.852 0 3.55 5.303 10.247 12 3.55 18.698 8.852 24l12-12zM3.147 5.706v12.588L9.442 12z"
    ></svg:path>`,
})
export class SiCollaboraonline {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
