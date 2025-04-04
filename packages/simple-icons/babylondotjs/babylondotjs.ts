import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siBabylondotjs],svg[si-babylondotjs]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.fill]': 'fill()',
  },
  template: `<svg:title>Babylon.js</svg:title>
    <svg:path
      d="M12 0 1.607 6.002v12L12 24l10.393-6V6L19.14 4.123 16.01 5.93l3.252 1.879v8.384L12 20.387l-7.264-4.194V7.807l10.393-6zm0 8.244-3.254 1.879v3.754h.002v.004L12 15.758l3.252-1.877v-3.76z"
    ></svg:path>`,
})
export class SiBabylondotjs {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly fill = input('currentColor');
}
