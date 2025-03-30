import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siBandcamp],svg[si-bandcamp]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Bandcamp</svg:title>
    <svg:path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z" />`,
})
export class SiBandcamp {}
