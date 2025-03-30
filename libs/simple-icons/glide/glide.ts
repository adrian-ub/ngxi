import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siGlide],svg[si-glide]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Glide</svg:title>
    <svg:path
      d="M10.8 17.52a6.72 6.72 0 0 1 6.72-6.72H24L10.8 24ZM0 13.2 13.2 0v6.48a6.72 6.72 0 0 1-6.72 6.72z"
    />`,
})
export class SiGlide {}
