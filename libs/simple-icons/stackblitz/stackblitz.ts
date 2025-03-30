import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siStackblitz],svg[si-stackblitz]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>StackBlitz</svg:title>
    <svg:path
      d="M10.797 14.182H3.635L16.728 0l-3.525 9.818h7.162L7.272 24l3.524-9.818Z"
    />`,
})
export class SiStackblitz {}
