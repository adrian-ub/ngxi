import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siGurobi],svg[si-gurobi]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.fill]': 'fill()',
  },
  template: `<svg:title>Gurobi</svg:title>
    <svg:path
      d="m11.036 0 7.032 1.359L24 18.37 18.37 24 0 17.635 1.805 5.952 11.036 0Zm12.389 18.239L17.887 2.36l-3.557 7.83 3.88 13.264 5.215-5.214Zm-5.822-16.46L11.138.528l-8.71 5.617 11.554 3.6 3.62-7.968Z"
    ></svg:path>`,
})
export class SiGurobi {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly fill = input('currentColor');
}
