import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siIstio],svg[si-istio]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.fill]': 'fill()',
  },
  template: `<svg:title>Istio</svg:title>
    <svg:path
      d="M4 21 20 21 10 24zM4 20 10 19 10 8zM11 19 20 20 11 0z"
    ></svg:path>`,
})
export class SiIstio {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly fill = input('currentColor');
}
