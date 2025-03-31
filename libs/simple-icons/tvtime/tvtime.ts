import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siTvtime],svg[si-tvtime]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>TV Time</svg:title>
    <svg:path d="M0 0v24h24V0zm4.8 4.8h14.4v4.8h-4.8v9.6H9.6V9.6H4.8Z" />`,
})
export class SiTvtime {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
