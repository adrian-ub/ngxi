import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siStencil],svg[si-stencil]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Stencil</svg:title>
    <svg:path
      d="M8.85 15.66h9.25l-5 5.34H3.9ZM24 9.328H4.997L0 14.672h19.003ZM10.884 3H20.1l-4.977 5.34H5.9Z"
    />`,
})
export class SiStencil {}
