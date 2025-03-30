import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siBulma],svg[si-bulma]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Bulma</svg:title>
    <svg:path
      d="M11.25 0l-6 6 -1.5 10.5 7.5 7.5 9 -6 -6 -6 4.5 -4.5 -7.5 -7.5Z"
    />`,
})
export class SiBulma {}
