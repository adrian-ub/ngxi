import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siFacebookgaming],svg[si-facebookgaming]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Facebook Gaming</svg:title>
    <svg:path
      d="M0 0v24h15.67v-7.35H7.35v-9.3H24V0zm8.33 15.68h8.32V24H24V8.32H8.33Z"
    ></svg:path>`,
})
export class SiFacebookgaming {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
