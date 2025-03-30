import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siCodeclimate],svg[si-codeclimate]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Code Climate</svg:title>
    <svg:path
      d="M16.125 5.272l-4.511 4.475 2.684 2.659 1.827-1.813 5.19 5.145L24 13.079zM8.13 8.265L0 16.066l2.772 2.662 5.357-5.145 5.357 5.145 2.772-2.662z"
    />`,
})
export class SiCodeclimate {}
