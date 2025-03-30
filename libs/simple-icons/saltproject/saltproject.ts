import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siSaltproject],svg[si-saltproject]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Salt Project</svg:title>
    <svg:path d="M0 12v10.56h12L18 12h6V1.44H12L6 12Z" />`,
})
export class SiSaltproject {}
