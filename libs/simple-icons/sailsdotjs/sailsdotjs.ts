import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siSailsdotjs],svg[si-sailsdotjs]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Sails.js</svg:title>
    <svg:path
      d="M2.23828 24S-6.9375 9.39844 11.9375 0v24H2.23828M14.85938 24V9.125s3.01171 4.91406 9.1328 14.875h-9.1328"
    />`,
})
export class SiSailsdotjs {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
