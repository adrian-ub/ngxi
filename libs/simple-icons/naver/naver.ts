import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siNaver],svg[si-naver]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Naver</svg:title>
    <svg:path
      d="M16.273 12.845 7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845Z"
    />`,
})
export class SiNaver {}
