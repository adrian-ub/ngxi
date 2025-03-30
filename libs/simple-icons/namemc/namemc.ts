import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siNamemc],svg[si-namemc]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>NameMC</svg:title>
    <svg:path d="M0 0v24h24V0Zm4.8 4.8H16V8h3.2v11.2H16V8H8v11.2H4.8V8Z" />`,
})
export class SiNamemc {}
