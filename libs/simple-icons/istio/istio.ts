import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siIstio],svg[si-istio]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Istio</svg:title>
    <svg:path d="M4 21 20 21 10 24zM4 20 10 19 10 8zM11 19 20 20 11 0z" />`,
})
export class SiIstio {}
