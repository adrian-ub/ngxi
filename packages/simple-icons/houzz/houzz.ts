import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siHouzz],svg[si-houzz]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Houzz</svg:title>
    <svg:path
      d="M1.27 0V24H9.32V16.44H14.68V24H22.73V10.37L6.61 5.75V0H1.27Z"
    ></svg:path>`,
})
export class SiHouzz {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
