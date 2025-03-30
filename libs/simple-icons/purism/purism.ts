import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siPurism],svg[si-purism]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Purism</svg:title>
    <svg:path d="M24 19.588H0V4.412h24zM2.824 16.765h18.352v-9.53H2.824Z" />`,
})
export class SiPurism {}
