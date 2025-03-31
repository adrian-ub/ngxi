import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siCmake],svg[si-cmake]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>CMake</svg:title>
    <svg:path
      d="M11.769.066L.067 23.206l12.76-10.843zM23.207 23.934L7.471 17.587 0 23.934zM24 23.736L12.298.463l1.719 19.24zM12.893 12.959l-5.025 4.298 5.62 2.248z"
    />`,
})
export class SiCmake {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
