import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siTelegraph],svg[si-telegraph]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Telegraph</svg:title>
    <svg:path d="M0 0v24h24V0H0zm6 6h12v3h-4.5v9h-3V9H6V6Z" />`,
})
export class SiTelegraph {}
