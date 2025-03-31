import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siPinboard],svg[si-pinboard]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Pinboard</svg:title>
    <svg:path
      d="M13.352 14.585l-4.509 4.614.72-4.062L3.428 7.57 0 7.753 7.58 0v2.953l7.214 6.646 4.513-1.105-4.689 4.982L24 24l-10.648-9.415z"
    />`,
})
export class SiPinboard {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
