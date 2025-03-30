import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siKtor],svg[si-ktor]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Ktor</svg:title>
    <svg:path d="M8 0 0 8l8 8V8h8zm8 8v8H8l8 8 8-8z" />`,
})
export class SiKtor {}
