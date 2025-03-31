import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siAframe],svg[si-aframe]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>A-Frame</svg:title>
    <svg:path
      d="M17.37 17.07H6.57L4.24 24H3.01l8.23-24h1.52l8.23 24h-1.3zm-.39-1.13l-5-14.96-5.03 14.98h10.03Z"
    />`,
})
export class SiAframe {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
