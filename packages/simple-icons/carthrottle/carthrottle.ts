import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siCarthrottle],svg[si-carthrottle]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.fill]': 'fill()',
  },
  template: `<svg:title>Car Throttle</svg:title>
    <svg:path
      d="M0 19.99h5.31l1-5.76h2.673L7.97 19.99h5.272l1.037-5.76h2.824l-1 5.76h7.584L21.9 17.029 24 4.01h-5.16l-.987 5.647h-2.86l.936-5.647H8.483l1.724 2.749-.487 2.898H6.996l.9-5.647H.35l1.76 2.774Z"
    ></svg:path>`,
})
export class SiCarthrottle {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly fill = input('currentColor');
}
