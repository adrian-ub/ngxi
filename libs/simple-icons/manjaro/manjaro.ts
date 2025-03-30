import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siManjaro],svg[si-manjaro]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Manjaro</svg:title>
    <svg:path
      d="M0 0v24h6.75V6.75h8.625V0H0zm8.625 8.625V24h6.75V8.625h-6.75zM17.25 0v24H24V0h-6.75z"
    />`,
})
export class SiManjaro {}
