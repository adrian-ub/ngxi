import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siVerizon],svg[si-verizon]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Verizon</svg:title>
    <svg:path d="M18.302 0H22v.003L10.674 24H7.662L2 12h3.727l3.449 7.337z" />`,
})
export class SiVerizon {}
