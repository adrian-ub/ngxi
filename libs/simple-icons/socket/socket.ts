import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siSocket],svg[si-socket]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Socket</svg:title>
    <svg:path
      d="M2.93 11.171c0 5.92 3.778 10.957 9.063 12.829a13.652 13.652 0 0 0 6.513-4.89 13.497 13.497 0 0 0 2.564-7.939V3.274L11.997 0 2.933 3.274v7.897zm7.491-6.09h4.208L13.34 9.47h2.292l-6.264 9.446 1.486-6.858H8.365z"
    />`,
})
export class SiSocket {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
