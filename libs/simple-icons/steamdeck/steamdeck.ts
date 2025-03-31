import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siSteamdeck],svg[si-steamdeck]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Steam Deck</svg:title>
    <svg:path
      d="M8.999 0v4.309c4.242 0 7.694 3.45 7.694 7.691s-3.452 7.691-7.694 7.691V24c6.617 0 12-5.383 12-12s-5.383-12-12-12Zm0 6.011c-3.313 0-6 2.687-5.998 6a5.999 5.999 0 1 0 5.998-6z"
    />`,
})
export class SiSteamdeck {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
