import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siVercel],svg[si-vercel]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Vercel</svg:title>
    <svg:path d="m12 1.608 12 20.784H0Z" />`,
})
export class SiVercel {}
