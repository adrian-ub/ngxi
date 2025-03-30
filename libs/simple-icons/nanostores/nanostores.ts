import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siNanostores],svg[si-nanostores]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Nano Stores</svg:title>
    <svg:path
      d="M13.708 24 .6 14.822l7.679-2.995 11.235 7.867L13.708 24ZM10.292 0 23.4 9.178l-7.679 2.995L4.486 4.306 10.292 0Z"
    />`,
})
export class SiNanostores {}
