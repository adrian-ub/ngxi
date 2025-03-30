import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siFlutter],svg[si-flutter]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Flutter</svg:title>
    <svg:path
      d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"
    />`,
})
export class SiFlutter {}
