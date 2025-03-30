import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siCodesandbox],svg[si-codesandbox]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>CodeSandbox</svg:title>
    <svg:path d="M0 24H24V0H0V2.45455H21.5455V21.5455H2.45455V0H0Z" />`,
})
export class SiCodesandbox {}
