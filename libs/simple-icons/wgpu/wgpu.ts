import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siWgpu],svg[si-wgpu]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>wgpu</svg:title>
    <svg:path
      d="M3.9999 2.0001 0 22h8.0001L12 15.0002l3.9999 6.9997H24L20.0001 2l-5.0003 8L12 6 9.0002 9.9999Z"
    />`,
})
export class SiWgpu {}
