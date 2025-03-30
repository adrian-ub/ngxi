import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siTeratail],svg[si-teratail]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>teratail</svg:title>
    <svg:path
      d="M9.81.968h4.375L24 23.032h-5.107L12.121 6.605h-.198L5.148 23.03H0Z"
    />`,
})
export class SiTeratail {}
