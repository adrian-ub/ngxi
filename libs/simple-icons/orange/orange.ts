import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siOrange],svg[si-orange]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Orange</svg:title>
    <svg:path d="M0 0h24v24H0V0Zm3.43 20.572h17.143v-3.429H3.43v3.429Z" />`,
})
export class SiOrange {}
