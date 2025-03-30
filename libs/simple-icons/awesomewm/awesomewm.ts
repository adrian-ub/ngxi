import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siAwesomewm],svg[si-awesomewm]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>awesomeWM</svg:title>
    <svg:path d="M0 24V8.25h16.5V7.5H0V0h24v24h-7.5v-8.25h-9v.75h8.25V24z" />`,
})
export class SiAwesomewm {}
