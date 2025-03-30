import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siLospec],svg[si-lospec]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Lospec</svg:title>
    <svg:path d="M4.23 0v24h15.541v-8.4004h-7.1719v3.5996H11.402V0z" />`,
})
export class SiLospec {}
