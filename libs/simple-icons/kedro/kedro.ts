import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siKedro],svg[si-kedro]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Kedro</svg:title>
    <svg:path d="m12 0 12 12-12 12L0 12 12 0z" />`,
})
export class SiKedro {}
