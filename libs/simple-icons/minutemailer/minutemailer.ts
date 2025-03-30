import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siMinutemailer],svg[si-minutemailer]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Minutemailer</svg:title>
    <svg:path
      d="M17.187 19.181L24 4.755 0 12.386l9.196 1.963.043 4.896 2.759-2.617-2.147-2.076 7.336 4.63z"
    />`,
})
export class SiMinutemailer {}
