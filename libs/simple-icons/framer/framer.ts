import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siFramer],svg[si-framer]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Framer</svg:title>
    <svg:path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />`,
})
export class SiFramer {}
