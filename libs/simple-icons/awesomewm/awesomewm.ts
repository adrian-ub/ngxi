import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siAwesomewm],svg[si-awesomewm]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>awesomeWM</svg:title>
    <svg:path d="M0 24V8.25h16.5V7.5H0V0h24v24h-7.5v-8.25h-9v.75h8.25V24z" />`,
})
export class SiAwesomewm {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
