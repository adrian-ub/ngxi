import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siKotlin],svg[si-kotlin]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Kotlin</svg:title>
    <svg:path d="M24 24H0V0h24L12 12Z" />`,
})
export class SiKotlin {}
