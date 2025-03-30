import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siPalantir],svg[si-palantir]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Palantir</svg:title>
    <svg:path
      d="M20.147 18L12 21.178 3.853 18 2.5 20.343 12 24l9.5-3.657L20.147 18zM12 0a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19zm0 16.078a6.568 6.568 0 1 1 0-13.136 6.568 6.568 0 0 1 0 13.136z"
    />`,
})
export class SiPalantir {}
