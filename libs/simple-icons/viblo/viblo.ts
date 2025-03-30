import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siViblo],svg[si-viblo]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Viblo</svg:title>
    <svg:path
      d="M10.569 19.68h2.904L21.621.018 18.705 0l-4.428 10.668H9.705L5.295 0H2.379l8.19 19.68zm-7.02 1.854h16.908V24H3.549v-2.466z"
    />`,
})
export class SiViblo {}
