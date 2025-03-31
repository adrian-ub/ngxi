import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siNetdata],svg[si-netdata]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Netdata</svg:title>
    <svg:path
      d="M14.764 21.827H9.922L0 2.173h14.084c5.476.01 9.913 4.565 9.916 10.183-.009 5.235-4.14 9.47-9.238 9.47z"
    />`,
})
export class SiNetdata {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
