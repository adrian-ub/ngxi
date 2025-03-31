import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siUnsplash],svg[si-unsplash]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Unsplash</svg:title>
    <svg:path
      d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z"
    />`,
})
export class SiUnsplash {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
